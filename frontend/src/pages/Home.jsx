import React from "react";

const Home = () => {
  return (
    <div>
      <nav class="fixed-top navbar-dark bg-dark">
        <div className="navContents">
          <a class="navbar-brand" href="/">
            TMS
          </a>
          <a class="btn btn-light btn-sm registerButton" href="/register" role="button">
          Register
        </a>
        <a class="btn btn-light btn-sm loginButton" href="/login" role="button">
          Login
        </a>
        </div>
        
      </nav>
      <div class="jumbotron centered">
        <div class="container">
          <i class="fas fa-key fa-6x"></i>
          <h1 class="display-3">Welcome to TMS</h1>
          <p class="lead">Come join us!</p>
          <hr />
          <a class="btn btn-light btn-lg" href="/register" role="button">
            Register
          </a>
          <a class="btn btn-dark btn-lg" href="/login" role="button">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
