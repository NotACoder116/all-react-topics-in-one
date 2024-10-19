import React from 'react'

const ChildHoc = (WrappedComponent) => {
  return (props) => {
    <WrappedComponent {...props}/>
  }
}

export default ChildHoc