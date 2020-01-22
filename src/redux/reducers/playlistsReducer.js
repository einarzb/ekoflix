import { FETCH_MOVIES } from "../actions/index";

let playlists = [
  {
    type: "Popular",
    list: [
      {
        id: 1,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/wizard/WSD_5-191120225055.jpg",
        title: "Wizard School Dropout",
        description:
          "After defying her parents and becoming a wizard school dropout, Andy has to figure out how to make it on her own in decidedly non-magical Los Angeles.",
        meta: ["comedy", "13 Episodes", "2019"]
      },
      {
        id: 2,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/EpicNight/horiz-epic-night-191115192138.jpg",
        title: "Epic Night",
        description:
          "After graduation day, three friends are facing going their separate ways and wants to make the last night of college count.",
        meta: ["comedy", "4 Episodes", "2019"]
      },
      {
        id: 3,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/5spbsps/horiz-timeline-191115192659.jpg",
        title: "Timeline",
        description:
          "When Dee’s phone mysteriously gains the ability to see the future, she might just have a chance of going from a zero to a major hero at her high school.",
        meta: ["drama", "8 Episodes", "2019"]
      },
      {
        id: 4,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/TheCoop/TheCoop_1-191120225227.jpg",
        title: "The Coop",
        description:
          "Welcome to Season 39 of the most interactive reality show ever: The Coop! But be warned, there’s a murderer in our midst, and they are bringing a real toxic energy into the house, especially after they offed token house-hunk, Ryan.",
        meta: ["drama", "15 Episodes", "2019"]
      },
      {
        id: 5,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/TMW/horiz-tmw-191115193321.jpg",
        title: "That Moment When",
        description:
          "Jill is a hot mess. It's up to YOU to navigate through a series of awkward moments that either leave her somewhat dignified or even hot-messier. Starring Milana Vayntrub, and created by Sandeep Parikh.",
        meta: ["drama", "7 Episodes", "2019"]
      },
      {
        id: 6,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/charlie/horiz-charlie-191115191513.jpg",
        title: "Charlie Gets Fired",
        description:
          "Charlie is a young lad trying to hold on to a job. But he suffers from user-interactivitis, a rare brain disease which means you get to choose his words for him. And you know what that means: Charlie gets fired. Have fun ruining his life!",
        meta: ["drama", "8 Episodes", "2019"]
      }
    ]
  },
  {
    type: "Comedy",
    list: [
      {
        id: 1,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/wizard/WSD_5-191120225055.jpg",
        title: "Wizard School Dropout",
        description:
          "After defying her parents and becoming a wizard school dropout, Andy has to figure out how to make it on her own in decidedly non-magical Los Angeles.",
        meta: ["comedy", "13 Episodes", "2019"]
      },

      {
        id: 3,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/5spbsps/horiz-timeline-191115192659.jpg",
        title: "Timeline",
        description:
          "When Dee’s phone mysteriously gains the ability to see the future, she might just have a chance of going from a zero to a major hero at her high school.",
        meta: ["drama", "8 Episodes", "2019"]
      },
      {
        id: 4,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/TheCoop/TheCoop_1-191120225227.jpg",
        title: "The Coop",
        description:
          "Welcome to Season 39 of the most interactive reality show ever: The Coop! But be warned, there’s a murderer in our midst, and they are bringing a real toxic energy into the house, especially after they offed token house-hunk, Ryan.",
        meta: ["drama", "15 Episodes", "2019"]
      },
      {
        id: 5,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/TMW/horiz-tmw-191115193321.jpg",
        title: "That Moment When",
        description:
          "Jill is a hot mess. It's up to YOU to navigate through a series of awkward moments that either leave her somewhat dignified or even hot-messier. Starring Milana Vayntrub, and created by Sandeep Parikh.",
        meta: ["drama", "7 Episodes", "2019"]
      },
      {
        id: 6,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/charlie/horiz-charlie-191115191513.jpg",
        title: "Charlie Gets Fired",
        description:
          "Charlie is a young lad trying to hold on to a job. But he suffers from user-interactivitis, a rare brain disease which means you get to choose his words for him. And you know what that means: Charlie gets fired. Have fun ruining his life!",
        meta: ["drama", "8 Episodes", "2019"]
      }
    ]
  },
  {
    type: "Drama",
    list: [
      {
        id: 1,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/wg01/8horiz-wg-191115220351.jpg",
        title: "#Wargames",
        description:
          "Join Kelly and her band of misfit hackers as they transform from pranksters to leaders of the international movement #WarGames and take on the powers that be.",
        meta: ["drama", "6 Episodes", "2020"]
      },
      {
        id: 2,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/EpicNight/horiz-epic-night-191115192138.jpg",
        title: "Epic Night",
        description:
          "After graduation day, three friends are facing going their separate ways and wants to make the last night of college count.",
        meta: ["drama", "4 Episodes", "2019"]
      },
      {
        id: 3,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/staging/episode/D3iXb9/Possibillia768x432_2.jpg",
        title: "Possibilia",
        description:
          "What if you could influence someone else's breakup? From acclaimed director duo Daniels. Starring Alex Karpovsky and Zoe Jarman",
        meta: ["drama", "8 Minutes", "2019"]
      },
      {
        id: 4,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/pfbdtt/vms-171108002536.jpg",
        title: "Virtual Morality",
        description: "Find the killer or die trying.",
        meta: ["drama", "3 Episodes", "2019"]
      },
      {
        id: 5,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/TMW/horiz-tmw-191115193321.jpg",
        title: "That Moment When",
        description:
          "Jill is a hot mess. It's up to YOU to navigate through a series of awkward moments that either leave her somewhat dignified or even hot-messier. Starring Milana Vayntrub, and created by Sandeep Parikh.",
        meta: ["drama", "7 Episodes", "2019"]
      },
      {
        id: 6,
        coverBg:
          "https://res.cloudinary.com/dlkxfitke/image/upload/w_445,f_auto,q_auto/fl_lossy/falcon_storage/production/playlists/charlie/horiz-charlie-191115191513.jpg",
        title: "Charlie Gets Fired",
        description:
          "Charlie is a young lad trying to hold on to a job. But he suffers from user-interactivitis, a rare brain disease which means you get to choose his words for him. And you know what that means: Charlie gets fired. Have fun ruining his life!",
        meta: ["drama", "8 Episodes", "2019"]
      }
    ]
  }
];

const initState = {
  playlists: playlists
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
  initState.playlists = data.data;
  return { ...initState };
}

export default playlistsReducer;
