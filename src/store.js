import { createStore, applyMiddleware, compose } from "redux";
import postReducer from "./reducers/postReducer";
import thunk from "redux-thunk";

export default createStore(
  postReducer,
  {
    posts: []
  },
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
