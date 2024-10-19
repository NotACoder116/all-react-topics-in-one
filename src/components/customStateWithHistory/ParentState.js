import React, { useState } from 'react'
import CustomStateWithHistory from './CustomStateWithHistory';

const ParentState = () => {
    const {goPrevious,  goForward, invalue, setState } = CustomStateWithHistory(0);

  return (
    <div>
       <p className='text-center'>{invalue}</p>
       <div>
        <button className='py-4 px-4 bg-red-500 rounded-lg mx-5' onClick={() => goPrevious()}>Previous</button>
        <button className='py-4 px-4 bg-blue-500 rounded-lg mx-5' onClick={() => setState(invalue)}>Increment</button>
        <button className='py-4 px-4 bg-green-500 rounded-lg mx-5' onClick={() => goForward()}>Forward</button>
       </div>
    </div>
  )
}

export default ParentState