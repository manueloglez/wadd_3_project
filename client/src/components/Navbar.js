import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = (props) => {
  const {currentUser, destroySession} = props
  return  <nav style={{padding: "10px",display: "flex", }}>
    <NavLink style={{ marginRight: "20px" }}  to="/">Home</NavLink>
    {currentUser ? <NavLink  style={{ marginRight: "20px" }}  to="/students">Student Page</NavLink> : ''}

    {currentUser && currentUser.isTeacher ? 
    <NavLink style={{ marginRight: "20px" }}  to="/teachers">Teacher Page</NavLink> : ''}

    {currentUser && currentUser.isAdmin ? 
    <NavLink style={{ marginRight: "20px" }}  to="/admin">Admin Page</NavLink> : ''}

    {currentUser ? 
    <button onClick={destroySession}>Sign Out</button> : 
    <> 
      <NavLink style={{ marginRight: "20px" }} to="/SignIn">
        Sign in
      </NavLink>
      <NavLink style={{ marginRight: "20px" }} to="/SignUp">
        Sign up
      </NavLink>
    
    </> 
    }
  </nav>
}

export default Navbar