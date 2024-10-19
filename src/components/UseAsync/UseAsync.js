import React, { useCallback, useEffect, useState } from "react";

const UseAsync = (asyncFn, immediate) => {
  const [state, setState] = useState({
    status: "Idle",
    value: null,
    error: null,
  });

  const refetch = useCallback(() => {
    // reset the state before call
    setState({
      status: "pending",
      value: null,
      error: null,
    });
    return asyncFn()
      .then((response) => {
        setState({
          status: "success",
          value: response,
          error: null,
        });
      })
      .catch((error) => {
        setState({
          status: "error",
          value: null,
          error: error,
        });
      });
  }, [asyncFn]);
  // execute the function
  // if asked for immediate
  useEffect(() => {
    if (immediate) {
      refetch();
    }
  }, [refetch, immediate]);
  // state values
  const { status, value, error } = state;

  return { status, value, error };
};

export default UseAsync;
