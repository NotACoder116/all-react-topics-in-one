import React, { useEffect, useState } from 'react'

const UseWindowsSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);

  return (
    <div>
        <p>Width: {size.width}</p>
        <p>Height: {size.height}</p>
    </div>
  )
}

export default UseWindowsSize