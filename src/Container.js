import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button } from './components/styledComponents/Button';

export default function SimpleContainer() {
  const notify = async() => {
    const permission = await Notification.requestPermission();

    // Проверяем, поддерживается ли Notification API
    if (!("Notification" in window)) {
      console.log("Это устройство не поддерживает уведомления.");
      return;
    }

    // Если разрешение еще не было дано, запрашиваем его
    if (permission === "granted") {
      // Если разрешение уже получено, создаем уведомление
      const notification = new Notification('My title', {
        tag: 'tag',
        body: 'My body'
      });

      console.log(notification)

      // Добавляем обработчики событий
      notification.onclick = () => {
        console.log('Уведомление было нажато');
        // Здесь можно добавить логику для перехода на нужную страницу или другое действие
      };

      notification.onshow = () => {
        console.log('Уведомление показано');
      };

      notification.onerror = () => {
        console.error('Произошла ошибка при показе уведомления');
      };

      notification.onclose = () => {
        console.log('Уведомление закрыто');
      };

      setTimeout(() => notification.close(), 10000);

    } else if (permission !== "denied") {
      console.log(`!= denied`);
      return;
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div>{'Hello world'}</div>
        <Button onClick={notify}>Show Notification</Button>
      </Container>
    </React.Fragment>
  );
}
