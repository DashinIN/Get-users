import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {

      axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
        
      })
      
     
    }, []);
  
    return (
      <div>
        <h2>Пользователи:</h2>
        <div className="users-container">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.group}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Users