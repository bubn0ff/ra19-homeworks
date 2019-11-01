import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_USERS_URL}/users.json`)
    .then(response => response.json())
    .then(data => setUsers(data))
  }, []);

  const handleClick = id => {
    setSelectedUser({ id });
  }

  return (
    <div className="App main-container">
      <List users={users} selected={selectedUser ? selectedUser.id : null} onClick={handleClick} />
      {selectedUser ? <Details info={selectedUser} /> : null}
    </div>
  );
}