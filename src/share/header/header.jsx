import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss'
function Header(props) {
  return (
    <header className="header">
      <NavLink to='/clock'>Clock</NavLink>
      <NavLink to='/hobby'>Hobby</NavLink>
      <NavLink to='/color'>Color</NavLink>
      <NavLink to='/pagination'>Pagination</NavLink>
      <NavLink to='/todo'>Todo</NavLink>
      <NavLink to='/product'>Product</NavLink>
    </header>
  );
}

export default Header;
