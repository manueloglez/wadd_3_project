import React from 'react'

const SignUp = () => {
    return <main>
      <h1>Sign Up</h1>
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form>
          <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"></span>
  </div>
  <input type="text" className="form-control" placeholder="First Name" />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"></span>
  </div>
  <input type="text" className="form-control" placeholder="Last Name" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"></span>
  </div>
  <input type="text" className="form-control" placeholder="E-mail" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"></span>
  </div>
  <input type="text" className="form-control" placeholder="Phone Number" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"></span>
  </div>
  <input type="text" className="form-control" placeholder="Date of Birth" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"></span>
  </div>
  <input type="text" className="form-control" placeholder="Password" />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"></span>
  </div>
  <input type="text" className="form-control" placeholder=" Confirm Password" />
</div>
<div> <div>
        <input type="radio" value="Student" name="Select" /> Student
        <input type="radio" value="Teacher" name="Select" /> Teacher
        <input type="radio" value="Admin" name="Select" /> Admin
      </div></div>
 <button type="button" className="btn btn-secondary btn-block">SignUp</button>
 <div className="message">
</div> 
   </form>
          </div>
        </div>
       </div>   
    
    </main>
  }
      
export default SignUp