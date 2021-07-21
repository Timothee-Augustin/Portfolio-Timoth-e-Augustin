import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const link = (path, text) => <NavLink to={path} exact activeClassName="active" className="link">{text}</NavLink>;

function Navbar() {
  return (
    <nav className="navbar">
      {link('/', 'Acceuil')}
      {link('/projects', 'Projets')}
      {link('/technologies', 'Technologies')}
      {link('/clients', 'Clients')}
      {link('/admin', 'Admin')}
    </nav>
  );
}

export default Navbar;
