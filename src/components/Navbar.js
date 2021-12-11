import React from 'react';
import { Link as NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about/app',
      text: 'About App',
    },
    {
      id: 3,
      path: '/about/me',
      text: 'About Me',
    },
  ];

  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
