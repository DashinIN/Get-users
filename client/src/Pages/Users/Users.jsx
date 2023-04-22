import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Users.scss"
import UserCard from '../../Components/UserCard';
import {  Link } from 'react-router-dom';

function Users() {
    const [isLoading, setIsloading] = useState(true);
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [groupActive, setGroupActive] = useState(0)
    const [searchValue, setSearchValue] = useState("")
    const [selectedOption, setSelectedOption] = useState('all');

    function handleSelectChange(event) {
      setSelectedOption(event.target.value);
    }

    useEffect(() => {
      setIsloading(true);
      axios.get(`http://localhost:5000/groups/${groupActive}/users?sort=${selectedOption}`)
      .then(response => {
        setUsers(response.data);
      }).finally(() => setIsloading(false) )

      axios.get('http://localhost:5000/groups')
      .then(response => {
        setGroups(response.data);
      })

    }, [searchValue, groupActive,selectedOption]);
  
    return (
      <div className="App">
        <Link className="link" to="/">На главную</Link>
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
        <select  className='select__sort' value={selectedOption} onChange={handleSelectChange}>
        <option value="all">Без сортировки</option>
        <option value="normal">В алфавитном порядке</option>
        <option value="reverse">Обратно алфавитному порядку</option>
      </select>
      </div>
        <div className="users__container">
          
            {isLoading ? (<h2>Загрузка...</h2>) : (
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