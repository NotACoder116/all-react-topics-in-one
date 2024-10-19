import React, { Component } from "react";

class AddPost extends Component {
  state = {
    title: "",
    description: "",
    status: "active",
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  textChange = (title, e) => {
    this.setState({
        [title]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label className="block">Title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.textChange.bind(this, 'title')}
              className="px-3 py-1 block w-full border border-gray-600 focus:outline-none focus: border-red-600"
            />
          </div>
          <div>
            <label className="block">Description</label>
            <textarea
              value={this.state.description}
              onChange={this.textChange.bind(this, 'description')}
              className="px-3 py-1 block w-full border border-gray-600 focus:outline-none focus: border-red-600"
            ></textarea>
          </div>
          <div>
            <label className="block">Status</label>
            <select
              value={this.state.status}
              onChange={this.textChange.bind(this, 'status')}
              className="px-3 py-1 block w-full border border-gray-600 focus:outline-none focus: border-red-600"
            >
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-5 py-1"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
