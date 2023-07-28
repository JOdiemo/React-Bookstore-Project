import React from 'react';
import { NavLink } from 'react-router-dom';

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
    </nav>
  );
};

export default Navbar;
