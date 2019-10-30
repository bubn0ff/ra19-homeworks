import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DetailsItem from './DetailsItem';

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
      {loading ? <p>Loading...</p> : <DetailsItem user={user} />}
    </div>
  );
}

Details.propTypes = {
  info: PropTypes.object.isRequired
}