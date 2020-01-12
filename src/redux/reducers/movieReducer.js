import { FETCH_MOVIE } from "../actions/index";
let movieKey = "";

const initState = {
  movieKey: movieKey
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return fetchedMovie(action.data);
    default:
      return state;
  }
};

function fetchedMovie(data) {
  initState.movieKey = data.data;
  return { ...initState };
}

export default movieReducer;
