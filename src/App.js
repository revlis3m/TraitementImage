// src/App.js
import React from 'react';
import { Router, Route, Switch } from 'wouter';
import { UserProvider } from './UserContext';
import ReceptionScene from './scenes/ReceptionScene';
import WelcomePage from './components/WelcomePage';
import Generaliste from './scenes/Generaliste';
import Ophtalmo from './scenes/Ophtalmo';
import Radio from './scenes/Radio';
import Cardio from './scenes/Cardio';
import './styles/App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <main>
            <Switch>
              <Route path="/" component={ReceptionScene} />
              <Route path="/welcome" component={WelcomePage} />
              <Route path="/departments/" component={Generaliste} />
              <Route path="/departments/ophtalmo" component={Ophtalmo} />
              <Route path="/departments/radio" component={Radio} />
              <Route path="/departments/cardio" component={Cardio} />
            </Switch>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
