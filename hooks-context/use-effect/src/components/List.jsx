import React from 'react';
import PropTypes from 'prop-types';

export default function List({ users, onClick }) {
    
  return (
    <ul>
      {users.map(user => 
      	<li 
      		key={user.id} 
      		onClick={() => onClick(user.id)}
          className={user.active ? 'li-active' : 'li'}>
          	{user.name}
        </li>)
      }
    </ul>
  );
}

List.propTypes = {
  users: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}