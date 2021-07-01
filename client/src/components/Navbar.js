import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return  <nav style={{padding: "10px",display: "flex", }}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/students">Student Page</NavLink>
    <NavLink to="/teacher">Teacher Page</NavLink>
    <NavLink to="/admin">Admin Page</NavLink>
    <NavLink style={{ marginRight: "20px" }} to="/SignIn">
      Sign_in
    </NavLink>
    <NavLink style={{ marginRight: "20px" }} to="/SignUp">
      Sign_up
    </NavLink>
  </nav>
}

export default Navbar