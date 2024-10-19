import { Component } from "react";

class SinglePost extends Component {

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('Should component Update', nextProps, nextState);
//     return false;
//   }  

  componentDidMount() {
    console.log("Component did mount");
  }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("Component Did Update", prevProps, prevState, snapshot);
//   }

//   getSnapshotBeforeUpdate(prevProp, prevState) {
//     console.log("getSnapshotBeforeUpdate - ", prevProp, prevState);
//     return null;
//   }

  render() {
    return (
      <div className="m-4 p-3 border border-gray-400 shadow">
        <div>{this.props.title}</div>
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>

        <div>
            <input type="text" value={this.props.title} onChange={this.props.titleChange} className="px-5 py-1 rounded-xl border border-gray-500"/>
        </div>

        {this.props.addPost}
      </div>
    );
  }
}

export default SinglePost;
