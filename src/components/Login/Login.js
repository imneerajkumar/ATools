import React, { useState } from 'react';
import { Failure } from '../../helper/alert';
import './Login.css';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleClick = () => {
    props.handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className='Login'>
      <div className='login-form'>
        {props.err && <Failure error={props.err} /> }
        <h1 className='title'>Welcome Back</h1>
        <p className='sub-title'>Sub-title text goes here</p>
        <div className='input-container'>
          <input  
            className='input'
            type="email"
            placeholder='Email Address*'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            className='input'
            type="password"
            placeholder='Password*'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input 
            className='submit'
            type="button"
            value="Login"
            onClick={handleClick}
          />
        </div>
        <div className='info'>
          <div className='check'>
            <input type='checkbox' />
            <p>Remember Password</p>
          </div>
          <a className='forget' href='/'>Forgot Password ?</a>
        </div>
      </div>
      <div className='image'>
        {/* Image */}
      </div>
    </div>
  );
}

export default Login;