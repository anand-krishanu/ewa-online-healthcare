import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header () {
    return (
        <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">User Data</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <Link class="btn btn-outline-success btn-outline-dark auth" type="submit" to='/register'>Register</Link>
            <Link class="btn btn-outline-success btn-outline-dark auth" type="submit" to='/login'>Login</Link>
            <Link class="btn btn-outline-success btn-outline-dark auth" type="submit" to='/allSpecialists'>List</Link>
            <Link class="btn btn-outline-success btn-outline-dark auth" type="submit" to='/profile'>Profile</Link>
          </div>
        </div>
      </nav>
    </div>
    )
}