import { combineReducers } from 'redux';
import singleMovie from './singleMovie.reducer';
import genres from './genres.reducer';
import movies from './movies.reducer';
import movieSearch from './movieSearch.reducer';

const rootReducer = combineReducers({
  singleMovie,
  genres,
  movies,
  movieSearch,
});

export default rootReducer;
