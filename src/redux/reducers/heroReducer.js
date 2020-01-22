import { FETCH_HERO } from "../actions/index";

let heroItem = [
  {
    coverBg:
      "https://res.cloudinary.com/dlkxfitke/image/upload/w_1920,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/save-the-dates/horiz-std-191115220019.jpg",
    title: "Save The Dates",
    description:
      "An interactive comedy about the love life of Chelsea, who turns a blind date into four parallel-reality courtships. Throughout the series, try dating each guy and perhaps realize, once and for all, that the grass is never greener.",
    meta: ["comedy", "3 Episodes", "2019"]
  }
];

const initState = {
  heroItem: heroItem
};

const heroReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_HERO:
      return fetchedMovie(action.data);
    default:
      return state;
  }
};

function fetchedMovie(data) {
  initState.heroItem = data.data;
  return { ...initState };
}

export default heroReducer;
