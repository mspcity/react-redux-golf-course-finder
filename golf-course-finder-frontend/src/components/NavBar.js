import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-outter">
      <div className="nav-inner">
          <NavLink to="/" className="nav-menu">Home</NavLink>
          <NavLink to="/courses" className="nav-menu">courses</NavLink>
          <NavLink to="/courses/new" className="nav-menu">Add New Course</NavLink>
      </div>   
    </nav>
  )
}

export default NavBar
