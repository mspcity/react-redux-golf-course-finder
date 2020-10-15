import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-outter">
      <div className="nav-inner">
          <NavLink to="/" className="nav-menu">Home</NavLink>
    
          <NavLink to="/courses" className="nav-menu">courses</NavLink>
      </div>   
    </nav>
  )
}

export default NavBar
