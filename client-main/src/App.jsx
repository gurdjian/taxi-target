import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Karta from './components/Karta/Karta'
import History from './components/History/History'
import Navbar from './components/NavBar/Navbar'
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth, googleCheckAuth } from "./redux/actions/userAction"

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(googleCheckAuth())
    console.log("YA V EFFEKTE", user);
    // dispatch(checkAuth())
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
