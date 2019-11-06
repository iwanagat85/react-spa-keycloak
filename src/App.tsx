import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './Login';
import Secured from './Secured';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React-SPA for keycloak</p>
      </header>
      <Router>
        <div className="container">
          <Route exact path="/" component={Login} />
          <Route path="/secured" component={Secured} />
        </div>
      </Router>
    </div>
  );
};

export default App;
