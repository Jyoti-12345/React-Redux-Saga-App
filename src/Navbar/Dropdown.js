import React, { useState } from 'react';
import './dropDown.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import contactUS from './contactUs';
import about from './about';

function DropDown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Router>
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          <li >
            <Link to="/about">About</Link>
          </li>
          <li >
            <Link to="/contactus">ContactUS</Link>
          </li>
          <li >
            <Link to="/passangerspage">PassangersPage</Link>
          </li>
        </ul>
      </>
      <Route path="/about" component={about} />
      <Route path="/contactus" component={contactUS} />
    </Router>
  );
}

export default DropDown;