import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Logo here
        </Link>
        <div className="menu-icon">
          <i className="" />
        </div>
        <ul className="" />
        <li className="nav-item">
          <Link to="/" className="nav-links">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/work" className="nav-links">
            Work
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links">
            Contact
          </Link>
        </li>
      </div>
    </nav>
  )
}

export default Navbar
