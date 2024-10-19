import React, { useState } from 'react'
import UseLocalStorage from './UseLocalStorage';
const UseCustomLocalStorageHook = () => {
   const [inputValue, setInputValue] = UseLocalStorage('name', '');

   
  return (
    <div>
        <input type="text" value={inputValue} className='border border-green-500 px-4 py-4' onChange={(e) => setInputValue(e.target.value)} />
    </div>
  )
}

export default UseCustomLocalStorageHook