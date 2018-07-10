import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = () =>
  //display component for navigation
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/search/T-rex'>T-rex</NavLink></li>
      <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
      <li><NavLink to='/search/computers'>Computers</NavLink></li>
    </ul>
  </nav>;
export default Nav;
