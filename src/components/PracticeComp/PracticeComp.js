import axios from "axios";
import React, { useEffect, useState } from "react";

const PracticeComp = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios("https://randomuser.me/api?results=19");

    if (response.status === 200) {
      setData(response.data.results);
    }
  };

  return (
    <div className="py-10">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {data.slice(page * 5 - 5, page * 5).map((eachResponse) => (
            <tr key={eachResponse.phone}>
              <td>
                {eachResponse.name.first} {eachResponse.name.last}
              </td>
              <td>{eachResponse.dob.age}</td>
              <td>{eachResponse.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {data?.length > 0 && (
        <div>
          <span onClick={() => page && setPage(page - 1)}>Prev</span>
          {[...Array(Math.ceil(data.length / 5))].map((_, i) => {
            return (
              <span
                key={i}
                onClick={() => setPage(i + 1)}
                className={`border border-black-400 px-4 py-3 ${
                  page === i + 1 ? "bg-yellow-400" : ""
                }`}
              >
                {i + 1}
              </span>
            );
          })}
          <span onClick={() => setPage(page + 1)}>Next</span>
        </div>
      )}
    </div>
  );
};

export default PracticeComp;
