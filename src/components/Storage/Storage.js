import React, { useState } from 'react'

const Storage = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInput = () => {
      const value = inputValue;
      const tempValues = [...data];
      tempValues.push(value);
      setData(tempValues);
      sessionStorage.setItem('data', JSON.stringify(tempValues));
      setInputValue('');
    }

    const handleDelete = (value) => {
        let tempValues = [...data];
        tempValues = tempValues.filter(eachValue => eachValue !== value);
        sessionStorage.setItem('data', JSON.stringify(tempValues));
        setData(tempValues);
    }

  return (
    <div>
        <input type="text" className='py-2 px-2 border border-cyan-400' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className='py-2 px-2 bg-red-400' onClick={handleInput}>ADD</button>
        {data.map((eachValue, i) => {
            return <div key={i}>
                <h3>{eachValue}</h3> 
                <button className='py-2 px-2 bg-blue-400' onClick={(e) => handleDelete(eachValue)}>DELETE</button>
                </div>
        })}
    </div>
  )
}

export default Storage