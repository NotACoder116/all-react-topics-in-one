import React, { Component } from "react";
import ButtonContext from "../Content/ButtonContext";
import UserContext from "../Content/UserContext";

export class Navigation extends Component {
  static contextType = ButtonContext;
  render() {
    return (
      <div>
        {/* <ButtonContext.Consumer>
          {(value) => {
            return <a >{value}</a>;
          }}
        </ButtonContext.Consumer> */}

        <UserContext.Consumer>
            {(userValue) => {
                return <div>{userValue.greet()}</div>
            }}
        </UserContext.Consumer>
      </div>
      //   OR
      //   <div>
      //     <a href="#">{this.context}</a>
      //   </div>
    );
  }
}

export default Navigation;
