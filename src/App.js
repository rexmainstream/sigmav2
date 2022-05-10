import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Loading from './components/Loading/Loading';

import { request_tokens } from './components/auth';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

  const page_state = "Login"

  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/callback') {
      console.log('requesting tokens')
      request_tokens()
    }
  })

  return (
    <div className="App">
    {(page_state === 'Loading') && <Loading />}
    {(page_state === 'Login') && <Login />}
    {(page_state === 'Home') && <Home />}
    </div>
  );
}

export default App;