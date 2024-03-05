import { actions } from "../actions";

const initalState = {
  posts: [],
  loading: false,
  error: null,
};

const PostReducer = (state, action) => {
  switch (action.type) {
    case actions.post.DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actions.post.DATA_FETCHED:
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    case actions.post.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actions.post.POST_CREATED:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.data],
      };

    default:
      return state;
  }
};

export { PostReducer, initalState };
