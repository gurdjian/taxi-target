import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css'
import Karta from './components/Karta/Karta'
import History from './components/History/History'
import Navbar from './components/NavBar/Navbar'
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import PersonalCabinet from "./components/PersonalCabinet/PersonalCabinet"
import { checkAuth, googleCheckAuth } from "./redux/actions/userAction"
import Admin from "./components/Admin/Admin"
import Main from "./components/Main/Main"

function App() {

  const dispatch = useDispatch();
  // const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(googleCheckAuth())
    dispatch(checkAuth())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
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
          <Route exact path="/сabinet" component={PersonalCabinet} />
          <Route exact path="/admin" component = {Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
