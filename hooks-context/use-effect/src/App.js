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
    const user = users.find(user => user.id === id);
    setSelectedUser({ id: user.id, name: user.name });
    setUsers(prevUsers => prevUsers.map(user => {
      user.active = user.id === id;
      return user;
    }))
  }

  return (
    <div className="App main-container">
      <List users={users} onClick={handleClick} />
      {selectedUser ? <Details info={selectedUser} /> : null}
    </div>
  );
}