import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Karta from './components/Karta/Karta'
import History from './components/History/History'
import Navbar from './components/NavBar/Navbar'
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./redux/actions/userAction"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())
  }, [])
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/karta">
            <Karta />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
