import React from 'react'

const MemeCard = ({ title, imgUrl }) => {
  return (
    <div className='p-4 m-4 border border-black'>
        <img className='w-64 h-64' src={imgUrl} alt={title} />
        {/* <p>{title}</p> */}
    </div>
  )
}

export default MemeCard