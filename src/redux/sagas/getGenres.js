import { put } from 'redux-saga/effects';
import axios from 'axios';

function* getGenres(action) {
  try {
    const response = yield axios.get('/api/movies/genres');
    yield put({
      type: 'SET_GENRES',
      payload: response.data,
    });
  } catch (err) {
    console.log('ERROR in GET genres Saga: ', err);
  }
}

export default getGenres;
