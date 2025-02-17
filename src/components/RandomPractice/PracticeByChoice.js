import React, { useRef } from 'react'
import ChildPractice from './ChildPractice';

const PracticeByChoice = () => {
    const inputRef = useRef('');

    const handleRef = (e) => {
        inputRef.current = e.target.value;
    }

  return (
    <div>
        <ChildPractice ref={inputRef} handleRef={handleRef}/>
    </div>
  )
}

export default PracticeByChoice