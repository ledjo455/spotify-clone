export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finished developing
  //   token:
  //     "BQAcQaxeUwMeMd1oDms1yAkYKk6lIF5f1deqCoUaSRWqmwav1DXW-JkbFDjHrpoqRJnOIVo4fv3Axqh_8AKlWQG4fpOlB9WJ_iqhI9ZuU50CQigP95pTY_kn_sbhpOGSkh_OMPR55UvxXMFYSAP1IJMYAPS7jAeHR1Dlm0b4SfJegKXqqm4x",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
