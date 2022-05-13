import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Loading from './components/Loading/Loading';

import { get_data, get_tokens, request_callback_tokens } from './components/auth';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {

  const [page, set_page] = useState("Loading")

  const location = useLocation()

  useEffect(() => {

    // check to see if user has just logged in
    if (location.pathname === '/callback') {

      console.log('requesting tokens')
      
      // login success
      if (request_callback_tokens() === true) {
        get_data()
        set_page("Home")
      }
      // login failed
      else {
        set_page("Login")
      }

    }

  }, [location])

  useEffect(() => {

    // user if authenticated
    if (get_tokens() === true) {
      set_page("Home")
    }
    // user needs to login
    else if (get_tokens() === false) {
      set_page("Login")
    }
  
  }, [page])

  return (
    <div className="App">
    {(page === 'Loading') && <Loading />}
    {(page === 'Login') && <Login />}
    {(page === 'Home') && <Home />}
    </div>
  );
}

export default App;