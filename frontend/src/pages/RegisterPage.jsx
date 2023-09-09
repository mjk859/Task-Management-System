import React from "react";
import { useState } from "react";

function RegisterPage() {
  const [user, setUser] = useState({
    name: "",
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
  async function handleClick(event) {
    event.preventDefault();    
    //It is the connection between frontend and backend
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  //content type can be bitwise,etc...
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password
      }),
    }) 
    const data = await response.json();
    console.log(data);
    
  }
  return (
    <div className="centered container jumbotron">
      <h1>Register</h1>
      <form>
        <div className="form-group row">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            className="form-control"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group row">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group row">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Register
        </button>
      </form>
      
    
    </div>
  );
}

export default RegisterPage;
