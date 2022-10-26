import React, { useState, useEffect } from "react";
import "./style.css";
// import axios from 'axios'

export default function App() {
  /* 
  create state variables for users, setUsers
  create function that fetches data onClick
  */
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const api = 'https://randomuser.me/api/?results=10'
    try{
      const response = await fetch(api)
      const data = await response.json()
      setUsers(data.results)
  } catch (err) {
      console.table(err)
    }
  }
  console.table(users)


  const list = users.map(user => {
    return (
      <li key={user.login.uuid}>
        {user.name.first} | {user.name.last} | {user.phone}
      </li>
    )
  })

  return (
    <div>
      <h1>fetch user data!</h1>
     <button onClick={() => fetchUsers()}>
       Fetch Data
      </button>

       <button onClick={()=> setUsers([])}>
        reset data
        </button>
      <ul>
        {list}
      </ul>
      {/* <ul>{list}</ul> */}
    </div>
  );
}
