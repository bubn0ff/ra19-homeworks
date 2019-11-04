import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

export default function Menu({ links }) {

  return (
    <nav className="menu">
      {links.map(link => (
        <NavLink 
            key={link.url} 
            to={link.url} 
            exact={link.url === '/'} 
            className="menu__item" 
            activeClassName="menu__item-active">
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}

Menu.propTypes = {
  links: PropTypes.array.isRequired
}