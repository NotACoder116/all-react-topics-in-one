import React, { useState } from 'react'
import useWhyDidYouUpdate from './useWhyDidYouUpdate'

const WhyDidYouUpdateParent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <Example count={count} fn={() => {}}/>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  )
}

const Example = (props) => {
    useWhyDidYouUpdate('Example', props);

    return <div>{props.count}</div>
}

export default WhyDidYouUpdateParent