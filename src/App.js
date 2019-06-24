import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import AddPosts from "./components/AddPosts";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddPosts />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
