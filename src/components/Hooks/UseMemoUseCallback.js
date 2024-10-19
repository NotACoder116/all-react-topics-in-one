import React, { useState } from 'react'
import CustomUseMemo from './CustomUseMemo';

const UseMemoUseCallback = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(100);

    const squaredCount = () => {
        console.log("Some expensive value - ", count1);
        return count * count;
    }

    const useMemoize = CustomUseMemo(squaredCount, [count]);
    // const useCallback1 = useCallback(squaredCount, [count]);

  return (
    <div>
        <p>{useMemoize}</p>
        <button className='bg-green-500 rounded-lg px-5 py-5 m-5' onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button className='bg-red-500 rounded-lg px-5 py-5 m-5' onClick={() => setCount1(prev => prev - 1)}>Decrement</button>
    </div>
  )
}

export default UseMemoUseCallback