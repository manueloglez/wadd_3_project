import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentPage from "./components/StudentPage";
import TeacherPage from './components/TeacherPage'
import AdminPage from './components/AdminPage';
import Navbar from "./components/Navbar";
import SignUp from "./components/login/SignUp";
import SignIn from "./components/login/SignIn";
import Welcome from "./components/Welcome";
import FacilityShowPage from './components/FacilityShowPage';
import AuthRoute from './components/AuthRoute';
import CCourses from "./components/CreatePages/CCourses";
import CReservations from "./components/CreatePages/CReservations";
import Cfacilities from "./components/CreatePages/Cfacilities";
import { User, Session } from './requests';
import './App.css'

const App = () => {
  const [state, setState] = useState({user: null})

  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) { 
        setState(state => {
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
      <AuthRoute exact path="/students" 
        isAuthenticated={state.user}
        component={StudentPage}/>
      <AuthRoute exact path="/teachers" 
        isAuthenticated={state.user}
        component={TeacherPage}/>
      <AuthRoute exact path="/admin" 
        isAuthenticated={state.user}
        component={AdminPage}/>
      <Route exact path='/SignIn' render={(routeProps)=><SignIn {...routeProps} onSignIn={getCurrentUser}/>} />
      <Route exact path='/SignUp' render={(routeProps)=><SignUp {...routeProps} onSignUp={getCurrentUser}/>} />
      <Route exact path='/course/new' render={(routeProps)=><CCourses{...routeProps} onCCourses={getCurrentUser}/>} />
      <Route exact path='/reservation/new' render={(routeProps)=><CReservations {...routeProps} onCReservations={getCurrentUser}/>} />
      <Route exact path='/facility/new' render={(routeProps)=><Cfacilities {...routeProps} onCfacilities={getCurrentUser}/>} />
      <Route exact path='/facility/:id' render={(routeProps)=><FacilityShowPage {...routeProps}/>} />
      <Route exact path="/" component={Welcome}/>
    </Switch>
  </BrowserRouter>
  </div>
}

export default App;
