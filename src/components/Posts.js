import React, { Component } from "react";
import { connect } from "react-redux";

import getPosts from "../actions/postActions";

class Posts extends Component {
  componentWillMount = () => {
    this.props.getPosts();
  };

  render() {
    const posts = this.props.posts.map(post => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <div>POSTS</div>
        {posts}
      </div>
    );
  }
}

// zapis z const mapDispatchToProps jest dobry do zapytan synchronicznych (bez uzycia thunk)
// const mapDispatchToProps = dispatch => ({
//   getPosts: () =>
//     dispatch({
//       type: FETCH_POSTS
//     })
// });

//

const mapStateToProps = stateOfstore => ({
  posts: stateOfstore.posts
});

export default connect(
  mapStateToProps, //tu jakie elementy stora komponent chcialby uzywac
  { getPosts } //tu wypisujemy jakie metody moga tworzyc akcje w tym komponencie z uzyciem thunk
)(Posts);
