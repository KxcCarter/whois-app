import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from 'react-redux';

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_MOVIES',
    });
  }

  render() {
    const fullMovieList = this.props.store.movies.map((item, index) => {
      return (
        <Grid item xs={6}>
          <Paper>
            <MovieItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              poster={item.poster}
            />
          </Paper>
        </Grid>
      );
    });

    return (
      <div>
        <Grid container spacing={5}>
          {fullMovieList}
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(MovieList);
