import React from 'react';
import { NavLink } from 'react-router-dom';
import user from './images/user.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/category',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          Bookstore CMS
        </h1>
        <ul className="nav-link">
          {links.map((link) => (
            <li key={link.id}>
              <a href="*">
                <NavLink
                  to={link.path}
                  className="link"
                  activeClassName="active-link"
                  exact
                >
                  {link.text}
                </NavLink>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-container">
        <img src={user} alt="user icon" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
