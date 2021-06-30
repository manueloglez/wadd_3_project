import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentPage from "./components/StudentPage";
import Navbar from "./components/Navbar";
import './App.css'

const App = () => {
  return <div className="App"> 
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/students" component={StudentPage}/>
    </Switch>
  </BrowserRouter>
  </div>
}

export default App;
