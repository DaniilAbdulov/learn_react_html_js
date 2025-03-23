import { Button, ButtonGroup, Card } from '@mui/material';
import React from 'react';
import {NavLink} from 'react-router-dom';

export const Home = () => {
  const lessons = [
    {
      id: 1,
      path: 'notificationapi',
      title: 'Notification API'
    },
    {
      id: 2,
      path: 'clipboardapi',
      title: 'Clipboard API'
    }
  ];

  return (
    <Card title="Выберите тему" className="content">
      <ButtonGroup variant="outlined" color="secondary">
        {lessons &&
          lessons?.length &&
          lessons.map(lesson => {
            return (
              <Button key={lesson.id} className="card">
                <NavLink style={{color: 'black'}} to={lesson.path}>
                  {lesson.title}
                </NavLink>
              </Button>
            );
          })}
      </ButtonGroup>
    </Card>
  );
};