import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './navbar/navBar';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
