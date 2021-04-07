import React, { useState } from 'react';
import './Dropdown.css';
import { Link,BrowserRouter as Router, Route} from 'react-router-dom';
import { PassangersPage } from '../component/PassangersPage';

function Dropdown() {
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
              <Link to= "/passangerspage">PassangersPage</Link>
            </li>
      </ul>
    </>
    <Route path="/Passangerspage" component={PassangersPage}/>
    </Router>
  );
}

export default Dropdown;