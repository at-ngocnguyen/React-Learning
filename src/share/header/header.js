import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <NavLink to='/clock'>Clock</NavLink>
      <NavLink to='/hobby'>Hobby</NavLink>
      <NavLink to='/color'>Color</NavLink>
      <NavLink to='/pagination'>Pagination</NavLink>
    </div>
  );
}

export default Header;
