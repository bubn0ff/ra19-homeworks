import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Details({ info }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_USERS_URL}/${info.id}.json`)
    .then(response => response.json())
    .then(data => setUser(data))
    .then(() => setLoading(false));
  }, [info.id]);

  return (
    <div className="details">
      {loading ? <p>Loading...</p> : 
        <ul>
          <li><img src={user.avatar} alt={"photo of " + user.name}></img></li>
          <li className="details-user-name">{user.name}</li>
          <li>city: {user.details.city}</li>
          <li>company: {user.details.company}</li>
          <li>position: {user.details.position}</li>
        </ul>
      }
    </div>
  );
}

Details.propTypes = {
  info: PropTypes.object.isRequired
}