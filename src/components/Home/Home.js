import logo from '../../res/images/Logo-Vector-Graphics.svg';
import Footer from '../footer';
import TT_display from '../Timetable/tt_display'

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";

function Home({tt_data}) {
    return ( <div className="App">
    <header className='navigation'>
      <div className='flex header'>
          <Link to="/">
            <img src={logo}
              className='logo'
              alt='logo for Sigma'
              title='Return home'
              aria-hidden='true'>
            </img>
          </Link>
        <nav>
          <ul className='link_list'>
            <li className="drop_down">
              <Link to="/timetable">Timetable</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li className="log_out"><a href=''>Log out</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <Routes>
        <Route exact path="/" element={<TT_display tt_data={tt_data}/>} />
        <Route exact path="/timetable" element={<TT_display tt_data={tt_data}/>} />
      </Routes>
    </main>
    <Footer />
</div> );
};

export default Home;