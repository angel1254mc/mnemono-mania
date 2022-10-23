import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
  } from "react-router-dom";

import '../css/NavBar.css';
function NavBar() {
  return (
    <nav className="navbar-outer">
        <div className="navbar-left">
            <Link to="/">Logo</Link>
        </div>
        <div className="navbar-right">
            <div className="link-el">
                <Link to="/">Home</Link>
            </div>
            <div className="link-el">
                <Link to="/about">About</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar