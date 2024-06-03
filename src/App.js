// src/App.js
import React from 'react';
import { Router, Route, Switch } from 'wouter';
import ReceptionScene from './scenes/ReceptionScene';
import WelcomePage from './components/WelcomePage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route path="/" component={ReceptionScene} />
            <Route path="/welcome" component={WelcomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
