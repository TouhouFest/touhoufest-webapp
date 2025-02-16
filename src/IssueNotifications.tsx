import {LocalNotifications, ScheduleOptions, LocalNotificationSchema, PendingResult} from '@capacitor/local-notifications';
import {Toast} from '@capacitor/toast';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBell as fasBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

// todo: optionally save notifcations issued to localstorage as a backup in case page close/open cancels notifications
export default function IssueNotifications({index, title, start_ts}: {index:number, title:string, start_ts:number}) {

  const [bellType, setBellType] = useState(faBell);
  const NOTIFYNAME = "NOTIFY";

  function issueNotification(usedate:Date|null = null){
    // retrieve date to use and store notification for later in case it gets cleared for whatever reason    
    if(usedate === null) {
      usedate = new Date(Date.now() + 1000 * 10);
    }
    localStorage.setItem(`${NOTIFYNAME}-${index}`, usedate.toString());

    let bodydesc:string = `Your event "${title}" is starting soon.`
    LocalNotifications.schedule({
      notifications: [
        {
          title:"Event Starting Soon!",
          body:bodydesc,
          id:index,
          schedule: {
            at: usedate,
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
        issueNotification();
      }
    });
  }

  function onTriggerFunction() {
    // check permissions the first time
    LocalNotifications.checkPermissions().then(
      (e) => {
        // issue permissions check if not granted, otherwise issue notification
        if (e.display != 'granted') {
          permissionsCheck();
        }
        else {
          issueNotification();
        }
      });
  }

  function checkNotificationFired(fired_not: LocalNotificationSchema) {
    //update ui accordingly
    if (fired_not["id"] === index) {
      // remove item from storage -- doesn't raise exception if already gone so whatever
      localStorage.removeItem(`${NOTIFYNAME}-${index}`);
      setBellType(faBell);
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
          let parsed_cachedtime:Date= new Date(cachedtime);
          let parsed_starttime:Date = new Date(start_ts);
          let now_time = new Date();
          
          // check if current time is less than that of event start time
          // schedule if it is, otherwise ignore
          issueNotification(parsed_cachedtime);
          // if( now_time < parsed_starttime) {
          //   issueNotification(parsed_cachedtime);
          // }
        }
      }
    });
  }, [])

  // add listener for when any notification is fired off
  LocalNotifications.addListener('localNotificationReceived', checkNotificationFired);

  return (
    <FontAwesomeIcon onClick={() => onTriggerFunction()} icon={bellType} size="lg"/>
  );
}
