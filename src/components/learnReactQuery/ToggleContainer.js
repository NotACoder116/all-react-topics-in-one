// import React, { useState } from 'react'
import CreatePost from './CreatePost';
// import LearnReactQuery from './LearnReactQuery';

const ToggleContainer = () => {
    // const [showData, setShowData] = useState(false);

  return (
    <div className='flex flex-col items-center'>
        {/* <button className='border-2 border-indigo-600 rounded-md py-2 px-4 m-4' onClick={() => setShowData(prev => !prev)}>TOGGLE</button>
        {showData && <LearnReactQuery />} */}
        <CreatePost />
    </div>
  )
}

export default ToggleContainer