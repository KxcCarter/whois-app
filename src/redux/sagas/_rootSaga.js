import { takeEvery } from 'redux-saga/effects';

import getGenres from './getGenres';
import getSingleMovie from './getSingleMovie';
import getAllMovies from './getAllMovies';
import updateMovie from './updateMovie';
import searchForMovie from './searchForMovie';

function* rootSaga() {
  yield takeEvery('GET_ALL_MOVIES', getAllMovies);
  yield takeEvery('GET_SINGLE_MOVIE', getSingleMovie);
  yield takeEvery('GET_GENRES', getGenres);
  yield takeEvery('UPDATE_MOVIE', updateMovie);
  yield takeEvery('MOVIE_SEARCH', searchForMovie);
}

export default rootSaga;
