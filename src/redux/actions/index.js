export const FETCH_HERO = "FETCH_HERO";
export const heroItemAction = data => ({
  type: FETCH_HERO,
  data: {
    data
  }
});

export const FETCH_MOVIES = "FETCH_MOVIES";
export const playlistAction = data => ({
  type: FETCH_MOVIES,
  data: {
    data
  }
});
