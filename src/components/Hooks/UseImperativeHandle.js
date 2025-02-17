import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const UseImperativeHandle = () => {
    const childRef = useRef(null);
  return (
    <div>
        <ChildRefComponent ref={childRef}/>
        <button onClick={() => childRef.current.focusInput()} className='bg-red-500 px-5 py-5  rounded-lg ml-5 text-center'>Focus Input</button>
    </div>
  )
}

const ChildRefComponent = forwardRef((props, ref) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focusInput,
            alert: () => alert("Hii")
        }
    })

    return <input type="text" ref={inputRef} className='border border-violet-500 rounded-lg px-5 py-5 w-60' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
})

export default UseImperativeHandle