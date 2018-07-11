import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = ({match}) =>{
  //display component for navigation
  return(<nav className="main-nav">
    <ul>
      <li><NavLink to='/query/T-rex'>T-rex</NavLink></li>
      <li><NavLink to='/query/dogs'>Dogs</NavLink></li>
      <li><NavLink to='/query/computers'>Computers</NavLink></li>
    </ul>
  </nav>);
}
export default Nav;
