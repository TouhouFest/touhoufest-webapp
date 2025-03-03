import {LocalNotifications, ScheduleOptions, LocalNotificationSchema, PendingResult, LocalNotificationDescriptor, CancelOptions} from '@capacitor/local-notifications';
import {Toast} from '@capacitor/toast';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBell as fasBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import dayjs from "dayjs/esm/index.js";
import DefaultNoficationModal from './DefaultNotificationModal';

// todo: optionally save notifcations issued to localstorage as a backup in case page close/open cancels notifications
export default function IssueNotifications({index, title, start_ts}: {index:number, title:string, start_ts:dayjs.Dayjs}) {

  const [bellType, setBellType] = useState(faBell);
  const NOTIFYNAME:string = "NOTIFY";

  // show/dont show default nofication modal
  const [showModal, setShowModal] = useState(false);


  function issueNotification(subtracttime:number = 0, usedate:dayjs.Dayjs|null = null){
    // retrieve date to use and store notification for later in case it gets cleared for whatever reason    
    if(usedate === null) {
      // TODO: update to use start_ts
      // usedate = new Date(Date.now() + 1000 * 10);
      // usedate = dayjs().add(10,"s");
      usedate = start_ts.subtract(subtracttime,"m");

    }
    localStorage.setItem(`${NOTIFYNAME}-${index}`, usedate.toISOString());

    let bodydesc:string = `Your event "${title}" is starting soon.`
    LocalNotifications.schedule({
      notifications: [
        {
          title:"Event Starting Soon!",
          body:bodydesc,
          id:index,
          schedule: {
            at: usedate.toDate(),
            allowWhileIdle:true
          },
        }
      ]
    }).then(() => {
      // add listener for when any notification is fired off
      LocalNotifications.addListener('localNotificationReceived', checkNotificationFired);
    }).then(() => {
      setBellType(fasBell);
    });
  }

  function permissionsCheck() {
    // attempt to issue notification
    // if denied, means user will need to go into settings
    LocalNotifications.requestPermissions().then((e) => {
      if (e.display != 'granted') {
        Toast.show({
          text:"Notifications permissions were denied!",
          position:"center"
        }); 
      }
      else {
        // issueNotification();
        setShowModal(true);
      }
    });
  }

  function onTriggerFunction() {
    // check permissions the first time
    if (bellType === fasBell) {
      let cancelitem:CancelOptions = {notifications: [{id: index}]};
      LocalNotifications.cancel(cancelitem).then(() => {
        removeNotification();
      });
    }
    else{
      LocalNotifications.checkPermissions().then(
        (e) => {
          // issue permissions check if not granted, otherwise issue notification
          if (e.display != 'granted') {
            permissionsCheck();
          }
          else {
            // TODO: add localstorage check for default notification, then uncomment
            // issueNotification();
            setShowModal(true);
          }
      });
    }
  }

  // remove item from storage and update ui -- doesn't raise exception if already gone so whatever
  function removeNotification() {
    localStorage.removeItem(`${NOTIFYNAME}-${index}`);
    setBellType(faBell);
  }

  function checkNotificationFired(fired_not: LocalNotificationSchema) {
    //update ui accordingly
    if (fired_not["id"] === index) {
      removeNotification();
    }
  }

  useEffect(function() {
   
    // search localnotifications to see if a notification is already queued
    let foundNotification:boolean = false;
    LocalNotifications.getPending().then((result) => {
      result.notifications.map((notice, i) => {
        if (notice.id === index) {
          foundNotification = true;
        }
      });
    // run after inspection of pending notifications is complete
    }).then(() => {
      // case 1: a pending notification was already found
      if (foundNotification) {
        setBellType(fasBell);
      }
      // case 2: no pending notifications were found
      else {
        // check for existence of cached notification
        let cachedtime:string|null = localStorage.getItem(`${NOTIFYNAME}-${index}`);
        // check if a cached notification exist; leave alone if not
        if (cachedtime !== null){
          let parsed_cachedtime:dayjs.Dayjs = dayjs(cachedtime);
          let now_time = dayjs();
          
          // check if current time is less than that of event start time
          // schedule if it is, otherwise ignore
          if( now_time < start_ts) {
            issueNotification(0, parsed_cachedtime);
          }
          // remove the old item
          else {
            localStorage.removeItem(`${NOTIFYNAME}-${index}`);
          }
        }
      }
    });
  }, [])

  // add listener for when any notification is fired off
  LocalNotifications.addListener('localNotificationReceived', checkNotificationFired);

  return (
    <>
      <DefaultNoficationModal show={showModal} changeState={setShowModal} callBackNotify = {issueNotification}/>
      <FontAwesomeIcon onClick={() => onTriggerFunction()} icon={bellType} size="lg"/>
    </>
  );
}
