import React, { useState } from 'react'
import Modal from './Modal'

const ParentModal = () => {
    const [show, setShow] = useState(false);

  return (
    <div>
        <button className='border border-blue-200 bg-blue-200 px-4 rounded-md' onClick={() => setShow(prev => !prev)}>{show ? 'Hide' : 'Show'} Button</button>
        <Modal show={show} title="Modal" onClose={() => setShow(false)}>
            <h1>Learners Bucket</h1>
        </Modal>
    </div>
  )
}

export default ParentModal