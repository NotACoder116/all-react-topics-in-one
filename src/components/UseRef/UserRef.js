import React, { useState } from 'react'

function UserRef(props) {
    const [inputValue, setInputValue] = useState('');
    

    function onInputHandle(e) {
        setInputValue(e.target.value);
    }

  return (
    <div>
        <input type="text" className='border focus:border-violet-500 rounded-lg px-5 py-5 border-violet-500' ref={props.inputRef} value={inputValue} onChange={(e) => onInputHandle(e)}/>
    </div>
  )
}

export default UserRef