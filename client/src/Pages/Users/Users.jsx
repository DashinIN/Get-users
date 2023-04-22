import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Users.scss"
import UserCard from '../../Components/UserCard';

function Users() {
    const [isLoading, setIsloading] = useState(true);
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [groupActive, setGroupActive] = useState(0)
    const [searchValue, setSearchValue] = useState("")

   
    useEffect(() => {
      setIsloading(true);
      axios.get(`http://localhost:5000/groups/${groupActive}/users`)
      .then(response => {
        setUsers(response.data);
      }).finally(() => setIsloading(false) )

      axios.get('http://localhost:5000/groups')
      .then(response => {
        setGroups(response.data);
      })

    }, [searchValue, groupActive]);
  
    return (
      <div className="App">
      <h1>Пользователи</h1>
      <div className="top">
        <ul className="tags">

          {groups.map((group, index) =>
             <li 
             onClick={()=> setGroupActive(index)}
             className={groupActive === index ? "active" : ""}
             key={index}
              >{group.name}</li>
            )}

        </ul>

        <input 
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className="search-input" 
        placeholder="Найти пользователя" 
        />
      </div>

    
        <div className="users__container">
            {isLoading ? (<h2>loaaad</h2>) : (
            users
            .filter(user =>
              user.name.toLowerCase()
              .includes(searchValue.toLowerCase())
            )
            .map(user => 
              <UserCard 
              key={user.id} 
              id={user.id} 
              name={user.name} 
              group={user.group}/>
            ))}

        </div>
      </div>
    );
  }

export default Users