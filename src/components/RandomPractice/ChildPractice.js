import React, { forwardRef } from 'react'

const ChildPractice = forwardRef((props, ref ) => {
  return (
    <div><input 
    ref={ref} 
    onChange={props.handleRef}
    className="px-3 py-1 block w-full border border-gray-600 focus:outline-none focus: border-red-600" /></div>
  )
})

export default ChildPractice