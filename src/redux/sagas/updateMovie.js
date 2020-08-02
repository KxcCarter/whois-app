import { put } from 'redux-saga/effects';
import axios from 'axios';

function* updateMovie(action) {
  try {
    console.log(action.payload);
    yield axios.put(`api/movies/edit/${action.payload.id}`, action.payload);
    const response = yield axios.get(`/api/movies/${action.payload}`);
    yield put({
      type: 'SET_SINGLE_MOVIE',
      payload: response.data,
    });
  } catch (err) {
    console.log('PUT error:', err);
  }
}

export default updateMovie;
