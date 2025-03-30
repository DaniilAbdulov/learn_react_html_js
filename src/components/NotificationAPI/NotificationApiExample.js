import React, {useContext} from 'react';
import {Button} from '../styledComponents/Button';
import {MyContext} from '../../App';

export const NotificationApiExample = () => {
  const {backgroundColor} = useContext(MyContext);

  const getPermission = async () => {
    if (Notification.permission === 'granted') {
      return 'granted';
    } else if (Notification.permission === 'denied') {
      return 'denied';
    } else {
      return await Notification.requestPermission();
    }
  };

  const showNotify = async () => {
    const permission = await getPermission();

    if (permission === 'granted') {
      const notify = new Notification('Notify', {
        tag: 'Tag',
        body: 'Body',
        requireInteraction: true,
        renotify: true,
      });

      notify.onclick = () => console.log('onclick');
      notify.onclose = () => console.log('onClose');
      notify.onerror = () => console.log('onerror');
      notify.onshow = () => console.log('onshow');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor}}>
      {'Notification API'}
      <Button onClick={showNotify}>Show Notification</Button>
    </div>
  );
};
