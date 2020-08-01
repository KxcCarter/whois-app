import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';

class MovieList extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <MovieItem />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(MovieList);
