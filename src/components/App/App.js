import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// --- custom components ---
import TESTMOVIEITEM from '../pages/MovieItem/MovieItem';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>Empty Page</p>
        </div>
        <TESTMOVIEITEM />
      </Router>
    );
  }
}

export default connect()(App);
