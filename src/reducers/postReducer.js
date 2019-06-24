import { FETCH_POSTS } from "../actions/actionTypes";

export default (oldState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...oldState,
        posts: action.payload
      };
    default:
      return oldState;
  }
};
