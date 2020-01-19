import { FETCH_MOVIES } from "../actions/index";

let playlist = {
  playlistType: "Popular",
  list: [
    {
      id: 1,
      coverBg:
        "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSvcTRpSlA-K3T6FVPyUtpsvu9-ezaPegtaHB1_0CWyIoWo2yrq6W5yOwyqlmB8VTFb2qc4YzPUPs2DLot3dqVkOU_qf_J9GsXE6f4lpiS2cUsRKi2mBV6CiOzag.jpg?r=e9f",
      title: "The Two Popes",
      description:
        "Behind Vatican walls, the conservative Pope Benedict and the liberal future Pope Francis must find common ground to forge a new path for the Catholic Church",
      meta: ["drama", "comedy", "2019"]
    },
    {
      id: 2,
      coverBg:
        "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRuu2QOtQGv8IXf7F8rgzQ7A4SOQEW6QhirIKE37AmGcB9LnIwUZ_yAZyGKcDauNyOtnfFaSBxEA-lSX0ksQjbjtwaEdueDSvpy_buxKj78OEFal2ZQA1DUsWtqz.webp?r=e9f",
      title: "The Two Popes",
      description:
        "Behind Vatican walls, the conservative Pope Benedict and the liberal future Pope Francis must find common ground to forge a new path for the Catholic Church",
      meta: ["drama", "comedy", "2019"]
    },
    {
      id: 3,
      coverBg:
        "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRuu2QOtQGv8IXf7F8rgzQ7A4SOQEW6QhirIKE37AmGcB9LnIwUZ_yAZyGKcDauNyOtnfFaSBxEA-lSX0ksQjbjtwaEdueDSvpy_buxKj78OEFal2ZQA1DUsWtqz.webp?r=e9f",
      title: "The Two Popes",
      description:
        "Behind Vatican walls, the conservative Pope Benedict and the liberal future Pope Francis must find common ground to forge a new path for the Catholic Church",
      meta: ["drama", "comedy", "2019"]
    },
    {
      id: 4,
      coverBg:
        "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRuu2QOtQGv8IXf7F8rgzQ7A4SOQEW6QhirIKE37AmGcB9LnIwUZ_yAZyGKcDauNyOtnfFaSBxEA-lSX0ksQjbjtwaEdueDSvpy_buxKj78OEFal2ZQA1DUsWtqz.webp?r=e9f",
      title: "The Two Popes",
      description:
        "Behind Vatican walls, the conservative Pope Benedict and the liberal future Pope Francis must find common ground to forge a new path for the Catholic Church",
      meta: ["drama", "comedy", "2019"]
    },
    {
      id: 5,
      coverBg:
        "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRuu2QOtQGv8IXf7F8rgzQ7A4SOQEW6QhirIKE37AmGcB9LnIwUZ_yAZyGKcDauNyOtnfFaSBxEA-lSX0ksQjbjtwaEdueDSvpy_buxKj78OEFal2ZQA1DUsWtqz.webp?r=e9f",
      title: "The Two Popes",
      description:
        "Behind Vatican walls, the conservative Pope Benedict and the liberal future Pope Francis must find common ground to forge a new path for the Catholic Church",
      meta: ["drama", "comedy", "2019"]
    },
    {
      id: 6,
      coverBg:
        "https://occ-0-1391-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRuu2QOtQGv8IXf7F8rgzQ7A4SOQEW6QhirIKE37AmGcB9LnIwUZ_yAZyGKcDauNyOtnfFaSBxEA-lSX0ksQjbjtwaEdueDSvpy_buxKj78OEFal2ZQA1DUsWtqz.webp?r=e9f",
      title: "The Two Popes",
      description:
        "Behind Vatican walls, the conservative Pope Benedict and the liberal future Pope Francis must find common ground to forge a new path for the Catholic Church",
      meta: ["drama", "comedy", "2019"]
    }
  ]
};

const initState = {
  playlist: playlist
};

const playlistsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return fetchedMoviesList(action.data);
    default:
      return state;
  }
};

function fetchedMoviesList(data) {
  initState.playlist = data.data;
  return { ...initState };
}

export default playlistsReducer;
