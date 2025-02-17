import React, { memo } from 'react'
import Child from './Child'

const Parent = memo(() => {
  console.log("Helloooo")
  return (
    <div>
        <Child/>
    </div>
  )
})

export default Parent