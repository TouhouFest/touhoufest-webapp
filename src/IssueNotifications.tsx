import Button from 'react-bootstrap/Button';
import {LocalNotifications, ScheduleOptions} from '@capacitor/local-notifications';
import {Toast} from '@capacitor/toast';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IssueNotifications({index, title}: {index:number, title:string}) {

  function issueNotification(){
    let bodydesc:string = `Your event "${title}" is starting in XYZ minutes.`
    LocalNotifications.schedule({
      notifications: [
        {
          title:"Event Starting Soon!",
          body:bodydesc,
          id:1,
          schedule: {
            at: new Date(Date.now() + 1000 * 3),
            allowWhileIdle:true
          },
        }
      ]
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

  return (
    <FontAwesomeIcon onClick={() => onTriggerFunction()} icon={faBell} size="lg"/>
  );
}
