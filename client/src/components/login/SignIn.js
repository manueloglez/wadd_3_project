import React from 'react'
import { Session } from '../../requests'
import './login.css'

const SignIn = (props) => {
  const { onSignIn } = props

  function handleSubmit(event) {
    event.preventDefault()
    const {currentTarget} = event
    const formData = new FormData(currentTarget)
    const params = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    Session.create(params).then(data => {
      if (data.id) {
        onSignIn()
        props.history.push('/students')
      }
    })
  }

  return <main>
    <h1>Sign In</h1>
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          <div className="image">
          </div>
        </div>
        <div className="body-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-user"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="email" name="email" id="email"/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fa fa-lock"></i></span>
          </div>
          <input type="password" className="form-control" placeholder="password" name="password" id="password"/>
        </div>
        <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
        <div className="message">
        </div>
          </form>
        </div>
      </div>
      </div>   
  </main>
  }
export default SignIn