import './App.css';
import React from 'react';
import UsersList from "./components/usersList/usersList";


function App() {

  return(
      <div style={{margin: "0 100px"}}>
          <h1>Users</h1>
       <UsersList/>
      </div>
  )




}

export default App;
