import React, { useEffect, useRef } from "react";

const useWhyDidYouUpdate = (name, props) => {
  const prevProps = useRef();
  let changedValues = [];

  useEffect(() => {
    if (prevProps.current) {
      const keys = Object.keys({ ...prevProps.current, props });
      keys.forEach((key) => {
        console.log(prevProps.current[key], props[key], "yupps");
        if (
          typeof prevProps.current[key] === "object" &&
          typeof props[key] === "object"
        ) {
          if (
            JSON.stringify(prevProps.current[key]) !==
            JSON.stringify(props[key])
          ) {
            changedValues.push({
              from: prevProps.current[key],
              to: props[key],
            });
          }
        } else {
          if (prevProps.current[key] !== props[key]) {
            changedValues.push({
              from: prevProps.current[key],
              to: props[key],
            });
          }
        }
      });

      if (changedValues.length) {
        console.log("Changed values are: ", changedValues);
      }
    }

    prevProps.current = props;
  }, [name, props]);
  return <div>WhyDidYouUpdate</div>;
};

export default useWhyDidYouUpdate;
