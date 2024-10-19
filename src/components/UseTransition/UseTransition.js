import React, { useState, useTransition } from 'react'

function UseTransition() {
    const [inputValue, setValue] = useState('');
    const [list, setList] = useState([]);
    const [startTransition] = useTransition();

    function handleInput(value) {
        setValue(value);

        startTransition(() => {
            let l = [];
            for (let i=0;i<20000;i++) {
                l.push(value);
            }
            setList(l);
        });
    }

  return (
    <div>
        <input type="text" className='bg-gray-500' value={inputValue} onChange={(e) => handleInput(e.target.value)} />
        <div>
            {list.map((eachValue) => {
                return <div>{eachValue}</div>
            })}
        </div>
    </div>
  )
}

export default UseTransition