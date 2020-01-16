import { FETCH_HERO } from "../actions/index";
let heroItem = [
  {
    coverBg:
      "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRuu2QOtQGv8IXf7F8rgzQ7A4SOQEW6QhirIKE37AmGcB9LnIwUZ_yAZyGKcDauNyOtnfFaSBxEA-lSX0ksQjbjtwaEdueDSvpy_buxKj78OEFal2ZQA1DUsWtqz.webp?r=e9f",
    title: "The Two Pops"
  },
  {
    coverBg:
      "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQm3VL9evX8pCPZD9Yz-p8KhHxz1Vg3jWdAWTCBTD1VPttcvE20CZhmS_zf_2iNO2M8Sl65KJZUquBsyJ47X942vs9KoUAuNvpBWVC6pFKFHG_fMYaIL713ZftUR.webp?r=189",
    title: "The Irish"
  },
  {
    coverBg:
      "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRuu2QOtQGv8IXf7F8rgzQ7A4SOQEW6QhirIKE37AmGcB9LnIwUZ_yAZyGKcDauNyOtnfFaSBxEA-lSX0ksQjbjtwaEdueDSvpy_buxKj78OEFal2ZQA1DUsWtqz.webp?r=e9f",
    title: "The Two Popes",
    description:
      "Behind Vatican walls, the conservative Pope Benedict and the liberal future Pope Francis must find common ground to forge a new path for the Catholic Church",
    meta: ["drama", "comedy", "2019"]
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
