import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header className="header content-offset">
    <h1 className="header__text">brooksb.io</h1>
    <nav className="header__nav">
      <NavLink
        className="header__nav-item"
        to="/projects"
        activeClassName="active-page"
      >
        Projects
      </NavLink>
      <NavLink
        className="header__nav-item"
        to="/contact"
        activeClassName="active-page"
      >
        Contact
      </NavLink>
    </nav>
  </header>
);
