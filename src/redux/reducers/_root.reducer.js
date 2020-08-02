import { combineReducers } from 'redux';
import singleMovie from './singleMovie.reducer';
import genres from './genres.reducer';
import movies from './movies.reducer';

const rootReducer = combineReducers({
  singleMovie,
  genres,
  movies,
});

export default rootReducer;
