import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className='Header'>
      <div className='logo'>
        ATools<p className='dot'>.</p>
      </div>
      <div className='btn-container'>
        <button className='btn'>
          Start Free Trial
        </button>
        <button className='btn login'>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;