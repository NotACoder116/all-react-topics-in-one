import React from 'react'
import UseLocalStorage from '../UseLocalStorage/UseLocalStorage'

function UseCustomHook() {
    const [inputValue, setInputValue] = UseLocalStorage('name', '');

  return (
    <div>
        <input type="text" className='border-red-400' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
  )
}

export default UseCustomHook