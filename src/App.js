import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Loading from './components/Loading/Loading';

import { get_tokens, request_callback_tokens } from './components/auth';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {

  const [page_state, set_page_state] = useState(get_tokens())

  const location = useLocation()
  
  useEffect(() => {

    // check to see if user has just logged in
    if (location.pathname === '/callback') {

      console.log('requesting tokens')
      
      request_callback_tokens()

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