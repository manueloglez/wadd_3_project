import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/students">Student Page</NavLink>
    <NavLink to="/teacher">Teacher Page</NavLink>
    <NavLink to="/admin">Admin Page</NavLink>
  </nav>
}

export default Navbar