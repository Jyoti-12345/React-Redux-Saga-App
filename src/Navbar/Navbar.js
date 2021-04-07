import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import  PassangersPage  from '../component/PassangersPage';
import Home from './Home';
import Services from './Services';


function Navbar() {
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
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
    <Switch>
        <Route path = "/home" component={Home}/>
        <Route path="/passangerspage" component={PassangersPage}/>
        <Route path="/services" component={Services}/>
    </Switch>
      </Router>
  );
}

export default Navbar;