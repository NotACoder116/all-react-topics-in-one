import React from 'react'
import useIdle from './useIdle'

const ParentUseIdle = () => {
    const idle = useIdle(2000);
  return (
    <div>{idle ? "User is Inactive" : "Active"}</div>
  )
}

export default ParentUseIdle