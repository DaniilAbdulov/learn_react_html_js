import { Button, ButtonGroup, Card } from '@mui/material';
import React from 'react';
import {NavLink} from 'react-router-dom';
import { lessons } from './consts';

export const Home = () => {

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