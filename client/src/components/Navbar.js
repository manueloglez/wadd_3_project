import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = (props) => {
  const {currentUser, destroySession} = props
  return  <nav style={{padding: "10px",display: "flex", }}>
    <NavLink to="/">Home</NavLink>
    {currentUser ? <NavLink to="/students">Student Page</NavLink> : ''}

    {currentUser && currentUser.isTeacher ? 
    <NavLink to="/teacher">Teacher Page</NavLink> : ''}

    {currentUser && currentUser.isAdmin ? 
    <NavLink to="/admin">Admin Page</NavLink> : ''}

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