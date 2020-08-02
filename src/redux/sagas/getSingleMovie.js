import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getSingleMovie(action) {
  try {
    const response = yield axios.get(`/api/movies/${action.payload}`);
    console.log('Get one movie payload:', action.payload);
    yield put({
      type: 'SET_SINGLE_MOVIE',
      payload: response.data[0],
    });
  } catch (err) {
    console.log('ERROR getting single movie: ', err);
  }
}

export default getSingleMovie;
