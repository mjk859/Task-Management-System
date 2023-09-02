import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({
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
  return (
    <div class="centered container jumbotron">
      <h1>Login</h1>
      <form>
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
