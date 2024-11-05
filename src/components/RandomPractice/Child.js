import React from 'react'

const Child = ({ onHandleInput }) => {

    const handleParentValue = () => {
        onHandleInput("Hi Yadwinder from child")
    }
  return (
    <div>
        <button onClick={handleParentValue}>Child BTN</button>
    </div>
  )
}

export default Child