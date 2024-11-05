import axios from "axios";
import React, { useEffect, useState } from "react";
import './StarWars.css';

const StarWars = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://swapi.dev/api/people/");
        const characterData = response.data.results;

        const characterDetails = await Promise.all(
          characterData.map(async (character) => {
            const films = await fetchDetails(character.films);
            const vehicles = await fetchDetails(character.vehicles);
            return { ...character, films, vehicles };
          })
        );

        console.log(characterDetails);
        setPeople(characterDetails);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPeople();
  }, []);

  const fetchDetails = async (urls) => {
    try {
      const details = urls.map((url) => axios.get(url));
      const results = await Promise.all(details);
      return results.map(
        (eachData) => eachData.data.name || eachData.data.title
      );
    } catch {}
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
    <table className="table-container">
      <thead>
        <tr>
          <th>NAME</th>
          <th>FILMS</th>
          <th>VEHICLES</th>
        </tr>
      </thead>
      <tbody>
        {people.map((character) => (
          <tr key={character.name}>
            <td>{character.name}</td>
            <td>
              {character.films.length > 0
                ? character.films.join(", ")
                : "No Films"}
            </td>
            <td>
              {character.vehicles.length > 0
                ? character.vehicles.join(", ")
                : "No Vehicles"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default StarWars;
