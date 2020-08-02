import { put } from 'redux-saga/effects';
import axios from 'axios';

// This is part of my attempt to be able to search for a movie by querying the database.
// This file is currently not being used and it's imports are commented out in _rootSaga.js

function* searchForMovie(action) {
  try {
    console.log('Movie title searched for:', action.payload);
    const response = yield axios.get(
      `/api/movies/search/${action.payload}/title`
    );

    yield put({
      type: 'SET_MOVIE_SEARCH',
      payload: response.data[0],
    });
  } catch (err) {
    console.log('ERROR getting single movie: ', err);
  }
}

export default searchForMovie;
