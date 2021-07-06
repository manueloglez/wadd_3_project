import React from 'react'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button'


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
    <Button className="btn-sm" onClick={destroySession}>Sign Out</Button> : 
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