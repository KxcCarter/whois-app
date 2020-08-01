import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put, take } from 'redux-saga/effects';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('GET_ALL_MOVIES', getAllMovies);
  yield takeEvery('GET_SINGLE_MOVIE', getSingleMovie);
  yield takeEvery('GET_GENRES', getGenres);
  yield takeEvery('UPDATE_MOVIE', updateMovie);
}

// --- SAGAS ---

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

function* getSingleMovie(action) {
  try {
    const response = yield axios.get(`/api/movies/${action.payload}`);
    console.log('Get one movie payload:', action.payload);
    yield put({
      type: 'SET_SINGLE_MOVIE',
      payload: response.data,
    });
  } catch (err) {
    console.log('ERROR getting single movie: ', err);
  }
}

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

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// --- REDUCERS ---

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return (state = action.payload);
    default:
      return state;
  }
};

const singleMovie = (state = [], action) => {
  switch (action.type) {
    case 'SET_SINGLE_MOVIE':
      return action.payload[0];
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    singleMovie,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
