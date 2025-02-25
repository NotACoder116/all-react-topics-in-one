import React from 'react'
import ProgressBar from './ProgressBar'

const ParentProgress = () => {
    const data = [0, 4, 10, 40, 60, 75, 100];
  return (
    <div style={{ width: '100%' }}>
        {data && data.map(value => <ProgressBar key={value} progress={value} />)}
    </div>
  )
}

export default ParentProgress