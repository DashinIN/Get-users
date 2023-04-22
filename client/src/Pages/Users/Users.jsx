import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Users.scss"
import UserCard from '../../Components/UserCard';

function Users() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {

      axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
        
      })
      
     
    }, []);
  
    return (
      <div className="App">
      <h1>Пользователи</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className="search-input" placeholder="Поиск по названию" />
      </div>

      <div className="content">
        <div className="users-container">
            {users.map(user => (

              <UserCard id={user.id} name={user.name} group={user.group}/>

            ))}
          </div>
      </div>

      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
      </div>
    );
  }

export default Users