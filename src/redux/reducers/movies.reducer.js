const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return (state = action.payload);
    default:
      return state;
  }
};

export default movies;
