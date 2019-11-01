import React from 'react';
import PropTypes from 'prop-types';

export default function List({ users, selected, onClick }) {
  
  return (
    <ul>
      {users.map(user => 
      	<li 
      		key={user.id} 
      		onClick={() => onClick(user.id)}
          className={selected === user.id ? 'li-active' : 'li'}>
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