const MoviesReducer = (state, action) => {
  switch (action.type) {
    case "MOVIES_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "MOVIES_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_SUCCESS":
      return {
        movies: [...state.movies,action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_SUCCESS":
      return {
        movies: state.movies.filter((m) => m._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default MoviesReducer;