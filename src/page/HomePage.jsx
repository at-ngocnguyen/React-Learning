import React from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.scss'
function HomePage(props) {
  return (
    <div className="homepage">
      <NavLink to="/hobby">Hobby</NavLink>
      <NavLink to="/pagination">Pagination</NavLink>
      <NavLink to="/clock">Clock</NavLink>
      <NavLink to="/magicbox">Color</NavLink>
    </div>
  );
}

export default HomePage;
