import React from 'react';
import './App.css';
import Routes from "./services/Routes";
import UserProvider from "./Context/UserProvider";

function App() {
  return (
      <UserProvider>
        <Routes/>
      </UserProvider>
  );
}

export default App;
