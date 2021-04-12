import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './navBar.css';
import DropDown from './dropDown';
import passangersPage from '../component/Passanger/passangersPage';
import home from './home';
import services from './services';
import newPassangers from '../component/newPassanger/newPassangers';


function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Router>
      <>
        <nav className='navbar'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMenu}>
                Home
            </Link>
            </li>
            <li className='nav-item'>
              <Link to='/passangerspage' className='nav-links' onClick={closeMenu}>
                PassangersPage
            </Link>
            </li>
            <li className='nav-item'>
              <Link to='/newPassangers' className='nav-links' onClick={closeMenu}>
                newPassangers
            </Link>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMenu}
              >
                Services <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <DropDown />}
            </li>
          </ul>
        </nav>
      </>
      <Switch>
        <Route path="/home" component={home} />
        <Route path="/passangerspage" component={passangersPage} />
        <Route path="/newPassangers" component={newPassangers} />
        <Route path="/services" component={services} />
      </Switch>
    </Router>
  );
}

export default NavBar;