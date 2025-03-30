import { BrowserRouter } from 'react-router';
import './App.css';
import { Router } from './routes';
import { Container, CssBaseline } from '@mui/material';
import React from 'react';

export const MyContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <CssBaseline />
      <MyContext.Provider value={{firstName: 'Daniil', lastName: 'Abdulov', backgroundColor: 'blue'}}>
      <Container maxWidth="sm" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Router />
      </Container>
      </MyContext.Provider>
    </div>
    </BrowserRouter>

  );
}

export default App;
