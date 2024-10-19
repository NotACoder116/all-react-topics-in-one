import React, { Component } from "react";
import { WithCategory } from "./WithCategory";

export class Category extends Component {
  render() {
    return (
      <div>
        {this.props.categories.map((eachCategory, i) => {
            return <div key={i}>{eachCategory}</div>
        })}
        <div>Category Name: {this.props.name}</div>
      </div>
    );
  }
}

export default WithCategory(3)(Category);
