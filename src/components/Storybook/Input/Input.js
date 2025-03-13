import React from 'react'

const Input = (props) => {
    const { size = 'medium', ...rest } = props;
  return (
    <input className={`input ${size}`} {...rest} />
  )
}

export default Input