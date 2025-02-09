import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          LKS Kab Wonosobo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page"  >
                Home
              </Link>  
            </li>
            <li className="nav-item">
              <Link to={"/form"} className="nav-link" >
                Folmulir
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/logout"} className="nav-link" >
                Logout
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
