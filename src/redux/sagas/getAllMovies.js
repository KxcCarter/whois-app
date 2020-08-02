import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getAllMovies(action) {
  try {
    const response = yield axios.get('/api/movies');
    yield put({
      type: 'SET_MOVIES',
      payload: response.data,
    });
  } catch (err) {
    console.log('ERROR in GET movies Saga: ', err);
  }
}

export default getAllMovies;
