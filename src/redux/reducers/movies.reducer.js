const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return (state = action.payload);
    case 'MOVIE_SEARCH':
      return (state = state.filter((item, index) => {
        return item.title === action.payload;
      }));
    default:
      return state;
  }
};

export default movies;
