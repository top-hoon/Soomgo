import React from 'react';
import GuestNav from './nav/GuestNav';
import UserNav from './nav/UserNav';
import ProNav from './nav/ProNav';
import '../assets/css/nav.css';

function Nav() {
  return (
    <div className="state-nav">
      <GuestNav />
    </div>
  )
}

export default Nav;