import React from 'react';
import logo from '../logo.svg'

const Header: React.FC = () => {
    let x = 0;
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="App-name">WiredBrain</span>
    </header>
  );
}

export default Header;
