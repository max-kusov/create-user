import React from "react";

import Header from './components/Header/Header'
import UserCreate from './components/UserCreate/UserCreate'
import UserList from "./components/UserList/UserList";

import './scss/app.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <UserCreate />
      <UserList />
    </div>
  );
}

export default App;
