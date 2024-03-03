import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  errror: null,
};

function ProfileReducer(state, action) {
  switch (action.type) {
    case actions.profile.DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actions.profile.DATA_FETCHED:
      return {
        ...state,
        user: action.data.user,
        posts: action.data.posts,
      };
    case actions.profile.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        errror: action.errror,
      };

    default:
      return state;
  }
}

export { ProfileReducer, initialState };
