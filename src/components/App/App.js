import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// --- custom components ---

import MovieList from '../pages/MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Movie List Home</h1>
        </div>

        <MovieList />
      </Router>
    );
  }
}

export default connect()(App);
