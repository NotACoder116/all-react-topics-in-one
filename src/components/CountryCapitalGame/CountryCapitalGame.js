import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import './CountryCapitalGame';

const DATA = {
    'India': 'Delhi',
    'Russia': 'Moscow',
    'China': 'Berlin'
}

const CountryCapitalGame = () => {
    const [randomPairs, setRandomPairs] = useState([]);

    useEffect(() => {
       const allOptions = Object.entries(DATA).flat();

       setRandomPairs(_.shuffle(allOptions));
    }, []);


  return (
    <div className='game-board'>{randomPairs.map(value => <button key={value} className="border border-blue-200 mx-3 px-3 rounded-md">{value}</button>)}</div>
  )
}

export default CountryCapitalGame