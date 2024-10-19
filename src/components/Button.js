import React from 'react'

export default function Button(props) {
  return (
    <button className='bg-red-400 text-white px-5 py-3 rounded-full'>{props.name}</button>
  )
}
