import React from 'react';
import { Switch, Route} from "react-router-dom"
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/map" component={Main} />
      </Switch>
    </>
  );
}

export default App;
