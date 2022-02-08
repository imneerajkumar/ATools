import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { Success } from './helper/alert';

function App() {
  const url = "https://reqres.in/api/login";
  const [tried, setTried] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(url, {
        email: email,
        password: password
      }); 

      if (response.data.token){
        setTried(true);
        setError(null);
      }   
    } 
    catch (error) {
      setTried(true);
      if (password.length === 0){
        setError("Missing Password");
      } else {
        setError("Wrong email or password");
      }
    }  
  };

  return (
    <div className="App">
      <Header />
      {tried===false && error===null && <Login handleLogin={handleLogin} />}
      {tried===true && error===null && <Success />}
      {tried===true && error!==null && <Login handleLogin={handleLogin} err={error} />}
    </div>
  );
}

export default App;
