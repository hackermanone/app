import React from 'react';
import Header from './components/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home"><LandingPage/></Route>
      </Switch>
    </Router>

  );
}

export default App;
