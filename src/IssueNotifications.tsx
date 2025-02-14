import {LocalNotifications, ScheduleOptions, LocalNotificationSchema, PendingResult} from '@capacitor/local-notifications';
import {Toast} from '@capacitor/toast';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBell as fasBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

// todo: optionally save notifcations issued to localstorage as a backup in case page close/open cancels notifications
export default function IssueNotifications({index, title}: {index:number, title:string}) {

  const [bellType, setBellType] = useState(faBell);

  function issueNotification(){
    let bodydesc:string = `Your event "${title}" is starting in XYZ minutes.`
    LocalNotifications.schedule({
      notifications: [
        {
          title:"Event Starting Soon!",
          body:bodydesc,
          id:index,
          schedule: {
            at: new Date(Date.now() + 1000 * 10),
            allowWhileIdle:true
          },
        }
      ]
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
    if (fired_not["id"] === index) {
      setBellType(faBell);
    }
  }

  useEffect(function() {
    LocalNotifications.getPending().then((result) => {
      console.log(result);
    });
  }, [])

  // add listener for when any notification is fired off
  LocalNotifications.addListener('localNotificationReceived', checkNotificationFired);

  return (
    <FontAwesomeIcon onClick={() => onTriggerFunction()} icon={bellType} size="lg"/>
  );
}
