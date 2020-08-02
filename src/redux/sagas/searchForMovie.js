import { put } from 'redux-saga/effects';
import axios from 'axios';

function* searchForMovie(action) {
  try {
    const response = yield axios.get(
      `/api/movies/search/${action.payload}/title`
    );
    console.log('Get one movie payload:', action.payload);
    yield put({
      type: 'SET_MOVIE_SEARCH',
      payload: response.data[0],
    });
  } catch (err) {
    console.log('ERROR getting single movie: ', err);
  }
}

export default searchForMovie;
