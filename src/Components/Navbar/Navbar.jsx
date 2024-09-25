import React from "react";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border border-bottom shadow-lg z-3 ">
      <div className="container-fluid ">
        <h1 className="mb-0 fw-bold">E-Commerce<span className="display-6">App</span></h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="#products">Products</a>
      </div>
    </div>
      </div>
   
    </nav>
  );
};

export default Navbar;
