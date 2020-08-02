const singleMovie = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SINGLE_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

export default singleMovie;
