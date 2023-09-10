import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();    
    //It is the connection between frontend and backend
    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  //content type can be bitwise,etc...
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      }),
    }) 
    const data = await response.json();
    console.log(data);
  }

  return (
    <div class="centered container jumbotron">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}> 
      {/* we can do this way also another way is in register page */}
        <div class="form-group row">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter your email..."
            name="userEmail"
            value={user.userEmail}
            onChange={handleChange}
          />
        </div>
        <div class="form-group row">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter your password..."
            name="userPassword"
            value={user.userPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      
    </div>
  );
};

export default LoginPage;
