import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// --- custom components ---

import MovieList from '../pages/MovieList/MovieList';
import { Container, Box, Typography } from '@material-ui/core';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <Container maxWidth="md">
          <Box mx="auto" p={3}>
            <Typography variant="h2">Movie List</Typography>
          </Box>

          <MovieList />
        </Container>
      </Router>
    );
  }
}

export default connect()(App);
