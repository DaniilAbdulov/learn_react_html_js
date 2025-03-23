import { BrowserRouter } from 'react-router';
import './App.css';
import { Router } from './routes';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <CssBaseline />
      <Container maxWidth="sm" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Router />
      </Container>
    </div>
    </BrowserRouter>

  );
}

export default App;
