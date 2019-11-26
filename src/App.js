import React from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><LandingPage/></Route>
        <Route exact path="/portfolio"><PortfolioPage/></Route>
      </Switch>
    </Router>

  );
}

export default App;
