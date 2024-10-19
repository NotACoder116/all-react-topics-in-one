import React, { useState } from 'react'

function DefferedInput() {
    const [inputValue, SetInputValue] = useState('');

  return (
    <div>
        <input type="text" className='border-solid border-2 border-sky-500' value={inputValue} onChange={(e) => SetInputValue(e.target.value)} />
    </div>
  )
}

export default DefferedInput