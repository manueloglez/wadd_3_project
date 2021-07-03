import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentPage from "./components/StudentPage";
import Navbar from "./components/Navbar";
import SignUp from "./components/login/SignUp";
import SignIn from "./components/login/SignIn";
import Welcome from "./components/Welcome";
import './App.css'

const App = () => {
  return <div className="App"> 
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/students" component={StudentPage}/>
    </Switch>
    <Switch>
      <Route exact path="/SignIn" component={SignIn}/>
    </Switch>
    <Switch>
      <Route exact path="/SignUp" component={SignUp}/>
    </Switch>
    <Switch>
      <Route exact path="/Welcome" component={Welcome}/>
    </Switch>
  </BrowserRouter>
  </div>
}

export default App;
