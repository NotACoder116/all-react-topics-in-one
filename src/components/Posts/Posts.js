import { Component } from "react";
import AddPost from "../AddPost/AddPost";
import Dialog from "../Dialog/Dialog";
import SinglePost from "../SinglePost/SinglePost";

class Posts extends Component {
  state = {
    posts: [
      { id : 1, title: 'Post 1', name: "Yadwinder", description: "Description 1" },
      { id: 2, title: 'Post 2', name: "Rajan", description: "Description 2" },
    ],
    showPosts: true,
  };

  showPost = () => {
    this.setState({ showPosts: !this.state.showPosts });
  };

  handleTitleChange = (id, e) => {
    console.log(id,e.target.value);
    const postIndex = this.state.posts.findIndex((eachValue) => eachValue.id === id);
    const posts = [...this.state.posts];

    posts[postIndex].title = e.target.value;
    this.setState({posts});

  }
  render() {
    setTimeout(() => {
      const posts = [...this.state.posts];
      posts[0].name = "Yashwant";

      this.setState({
        posts,
      });
    }, 3000);

    let post = null;

    if (this.state.showPosts) {
      post = (
        <div className="flex">
          <SinglePost
            title={this.state.posts[0].title}
            name={this.state.posts[0].name}
            description={this.state.posts[0].description}
            addPost={<AddPost/>}
            titleChange={this.handleTitleChange.bind(this, this.state.posts[0].id)}
          />
          <SinglePost
            title={this.state.posts[1].title}
            name={this.state.posts[1].name}
            description={this.state.posts[1].description}
            addPost={<AddPost/>}
            titleChange={this.handleTitleChange.bind(this, this.state.posts[1].id)}
          />
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.showPost}>Show Post</button>
        {post}

        <AddPost/>

        <hr/>
        <Dialog>
            <div>Show Dialog Data</div>
        </Dialog>
      </div>
    );
  }
}

export default Posts;
