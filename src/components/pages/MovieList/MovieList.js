import React, { Component } from 'react';
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
        <Grid key={item.id} item xs={6}>
          <MovieItem
            id={item.id}
            title={item.title}
            description={item.description}
            poster={item.poster}
          />
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
