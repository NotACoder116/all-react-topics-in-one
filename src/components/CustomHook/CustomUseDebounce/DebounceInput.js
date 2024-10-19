import React, { useState } from 'react'
import CustomDebounce from './CustomDebounce';

const DebounceInput = () => {
   const [inputValue, setInputValue] = useState('');

   const debounceValue = CustomDebounce(inputValue, 1000);
   
  return (
    <div>
        <p>{debounceValue}</p>
        <input type="text" value={inputValue} className='border border-green-500 px-4 py-4' onChange={(e) => setInputValue(e.target.value)} />
    </div>
  )
}

export default DebounceInput