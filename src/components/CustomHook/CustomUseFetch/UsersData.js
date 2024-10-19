import React from "react";
import { FixedSizeList } from "react-window";
import CustomUseFetch from "./CustomUseFetch";

const UsersData = () => {
  const { data, isLoading, error } = CustomUseFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const Row = ({ index, style }) => (
    <div style={style}>
      <li
        className="border border-violet rounded-lg px-4 py-4 mb-5"
        key={data[index].id}
      >
        <h3 className="font-bold">{data[index].title}</h3>
        <p>{data[index].body}</p>
      </li>
    </div>
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="w-full">
      {data && (
        <ul className="mx-5 my-5">
          {
            <FixedSizeList
              height={window.innerHeight}
              itemCount={data.length}
              itemSize={100}
              width="100%"
            >
              {Row}
            </FixedSizeList>
          }
          {/* {
        data.map(eachData => {
          return <li className="border border-violet rounded-lg px-4 py-4 mb-5" key={eachData.id}>
              <h3 className="font-bold">{eachData.title}</h3>
              <p>{eachData.body}</p>
          </li>
        })
       } */}
        </ul>
      )}
    </div>
  );
};

export default UsersData;
