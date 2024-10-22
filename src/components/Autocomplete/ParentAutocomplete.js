import React from 'react'
import Autocomplete from './Autocomplete'

const ParentAutocomplete = () => {
    const fetchSuggestions = async (query) => {
       const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
       if (!response.ok) {
        throw new Error("Network response not ok");
       }
       const result = await response.json();
       return result.recipes;
    }

  return (
    <div className='w-6/12 mt-10'>
        <h1 className='font-bold text-lg'>Autocomplete / Typehead</h1>

        <Autocomplete
        placeholder={"Enter Recipe"}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customeLoading={<>Loading Recipe</>}
        onSelect={res => console.log(res)}
        onChange={input => {}}
        onBlur={e => {}}
        onFocus={e => {}}
        customStyles={{}}
        >
        </Autocomplete>
    </div>
  )
}

export default ParentAutocomplete