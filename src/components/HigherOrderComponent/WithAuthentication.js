import React from "react";

const WithAuthentication = (WrappedComponent) => {
  return (props) => {
    if (!props.isAuthenticated) {
        return <div>Invalid authentication</div>;
    }

    return (
      <div>
        <WrappedComponent {...props}/>
      </div>
    );
  };
};

export default WithAuthentication;
