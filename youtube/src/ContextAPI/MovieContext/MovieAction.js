export const MoviesStart = () => ({
    type: "MOVIES_START",
  });
  export const MovieSuccess = (movies) => ({
    type: "MOVIES_SUCCESS",
    payload: movies,
  });
  export const MovieFailure = () => ({
    type: "MOVIES_FAILURE",
  });
  

  export const  createStart = () => ({
    type: "CREATE_START",
  });
  export const createSuccess = (movie) => ({
    type: "CREATE_SUCCESS",
    payload: movie,
  });
  export const createFailure = () => ({
    type: "CREATE_FAILURE",
  });
  

  export const  deleteStart = () => ({
    type: "DELETE_START",
  });
  export const deleteSuccess = (id) => ({
    type: "DELETE_SUCCESS",
    payload: id,
  });
  export const deleteFailure = () => ({
    type: "DELETE_FAILURE",
  });