import React from 'react';
import './UserList.css';
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);
  console.log(users)
  return (

   
    <div>
      <h1>Liste des utilisateurs</h1>
     
  <>
       {users.map((user,index) => (
          <div key={index}>
          <CardComponent Name ={user.name} id= {user.id} Phone={user.phone} Email={user.email}/> 

          </div>
        ))}    
      </>
     
    
    </div>
  );
}

export default UserList;