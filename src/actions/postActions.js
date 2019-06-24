import { FETCH_POSTS } from "./actionTypes";

const getPosts = () => dispatch => {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export default getPosts;
