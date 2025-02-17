import React, { useState } from 'react'
import CustomUseEffect from './CustomUseEffect';

const UseEffectParent = () => {
    const [count, setCount] = useState(0);
    

    CustomUseEffect(() => {
      console.log("Runs custom use effect");

      return () => {
        console.log("Unmount")
      }
    }, []);

  return (
    <div>
        <button className='bg-green-600 rounded-md px-2 py-2 text-white' onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <span className='px-5'>{count}</span>
        <button className='bg-orange-600 rounded-md px-2 py-2 text-white' onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  )
}

export default UseEffectParent