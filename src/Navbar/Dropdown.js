import React, { useState } from 'react';
import './dropDown.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

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
    </Router>
  );
}

export default DropDown;