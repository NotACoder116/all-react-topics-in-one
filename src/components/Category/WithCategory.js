import { Component } from "react";

export function WithCategory(limit) {
  return function (WrappedComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = { categories: ["Category 1", "Category 2", "Category 3", "Category 4"] };
      }
      render() {
        const categories = this.state.categories.splice(0, limit);
        return (
          <div>
            <WrappedComponent {...this.props} categories={categories} />
          </div>
        );
      }
    };
  };
}
