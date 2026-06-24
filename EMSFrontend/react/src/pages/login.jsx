import React from 'react';
import './Login.css'
const Login = () => {
  return (
    <div className='Main_Container'>
      <div className='Leftside'>
        <h1>Employee Management System (EMS)</h1>
        <h4>Manage employees efficiently, securely, and seamlessly from a single platform.</h4>
      </div>
      <div className="Rightside">
  <div className="LoginCard">
    <h1>Welcome Back</h1>
    <p className="SubTitle">
      Sign in to continue managing employees
    </p>

    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Password" />

    <button>Login</button>
  </div>
</div>
    </div>
  );
};

export default Login;
