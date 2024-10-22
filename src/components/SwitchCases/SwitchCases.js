import React, { Children } from "react";

const CustomSwitch = ({ children, value }) => {
  let defaults = [];
  let cases = [];
  Children.forEach(children, (e) => {
    if (e.type.name === "SwitchCase") {
      if (typeof e.props.value === "function") {
        if (e.props.value(value)) {
          cases.push(e);
        }
      } else if (e.props.value === value) {
        cases.push(e);
      }
    } else if (e.type.name === "DefaultCase") {
      defaults.push(e);
    }
  });

  if (cases.length > 0) {
    return cases;
  } else {
    return defaults;
  }
};

const SwitchCase = ({ children }) => {
  return <div>{children}</div>;
};

const DefaultCase = ({ children }) => {
  return <div>{children}</div>;
};

const SwitchCases = () => {
  return (
    <CustomSwitch value="4">
      <SwitchCase value={(e) => e > 10}>
        <div>Hello 10</div>
      </SwitchCase>
      <SwitchCase value="20">Hello 20</SwitchCase>
      <SwitchCase value="30">Hello 30</SwitchCase>
      <SwitchCase value="10">
        <div>Hello 30</div>
      </SwitchCase>
      <DefaultCase>Hello Default</DefaultCase>
    </CustomSwitch>
  );
};

export default SwitchCases;
