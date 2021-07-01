import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentPage from "./components/StudentPage";
import Navbar from "./components/Navbar";
import SignUp from "./components/login/SignUp";
import SignIn from "./components/login/SignIn";
import { User, Session } from './requests';
import './App.css'

const App = () => {
  const [state, setState] = useState({user: null})

  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) { 
        setState(state => {
          console.log(user)
          return { user }
        })
      }
    })
  }

  const destroySession = () => {
    Session.destroy().then((res) => {
      setState((state) => {
        return { user: null };
      });
    });
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return <div className="App"> 
  <BrowserRouter>
    <Navbar currentUser={state.user} destroySession={destroySession}/>
    <Switch>
      <Route exact path="/students" component={StudentPage}/>
      <Route exact path='/SignIn' render={(routeProps)=><SignIn {...routeProps} onSignIn={getCurrentUser}/>} />
      <Route exact path='/SignUp' render={(routeProps)=><SignUp {...routeProps} onSignUp={getCurrentUser}/>} />
    </Switch>
  </BrowserRouter>
  </div>
}

export default App;
