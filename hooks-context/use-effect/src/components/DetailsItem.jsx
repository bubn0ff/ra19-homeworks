import React from 'react'
import PropTypes from 'prop-types';

export default function DetailsItem({ user }) {

  return (
    <ul>
      <li><img src={user.avatar} alt={"photo of " + user.name}></img></li>
      <li className="details-user-name">{user.name}</li>
      <li>city: {user.details.city}</li>
      <li>company: {user.details.company}</li>
      <li>position: {user.details.position}</li>
    </ul>
  )
}

DetailsItem.propTypes = {
  user: PropTypes.object.isRequired
}