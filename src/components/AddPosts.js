import React, { Component } from "react";

class AddPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ title: this.state.title, body: this.state.body })
    })
      .then(response => response.json())
      .then(posts => console.log(posts));
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChange} type="text" name="title" />
        <br />
        <textarea onChange={this.handleChange} name="body" />
        <br />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default AddPosts;
