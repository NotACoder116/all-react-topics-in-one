// import React, { useState } from "react";

// const ChildComponent = React.memo(({ count }) => {
//   console.log("Child rendered!"); // This should only log when props change
//   return <h2>Count: {count}</h2>;
// }, (prevProps, nextProps) => {
//     console.log(prevProps, nextProps)
//   return prevProps.count === nextProps.count; // Only re-render if `count` changes
// });

// const ComponentShouldUpdate = () => {
//   const [count, setCount] = useState(0);
//   const [other, setOther] = useState(false); // Another state to test re-render

//   return (
//     <div>
//       <ChildComponent count={count} />
//       <button className="border border-blue-500 px-2 py-1 mx-2 bg-blue-2 rounded-md" onClick={() => setCount(count + 1)}>Increase Count</button>
//       <button className="border border-green-500 px-2 py-1 bg-green-2 rounded-md" onClick={() => setOther(!other)}>Toggle Other State</button>
//     </div>
//   );
// };

// export default ComponentShouldUpdate;

import { useRef, useState} from 'react';

export default function ComponentShouldUpdate() {
  const [inc, setInc] = useState(0); 
  const myRef = useRef(0);
  const handleIncreament = () => {
    if ( myRef.current == NaN) {
      myRef.current = 0
    }
    myRef.current = myRef.current+1;
    if (myRef.current % 2 == 0) {
      setInc(prev => myRef.current)
    }
  }

  return (
    <div className="App">
      {inc}
      <button onClick={(e) => handleIncreament()}>Increament</button>
    </div>
  );
}
