import React from "react";
import { useState } from "react";

function RegisterPage() {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
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
  function handleClick(event) {
    console.log(user.userName, user.userEmail, user.userPassword);
    setUser({
        userName:"",
        userEmail:"",
        userPassword:""
    })
        event.preventDefault();
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
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
        </div>
        <div class="form-group row">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            className="form-control"
            name="userEmail"
            value={user.userEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group row">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            className="form-control"
            name="userPassword"
            value={user.userPassword}
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
