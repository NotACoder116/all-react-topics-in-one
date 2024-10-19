import React from 'react'

const ButtonHoc = ({ onClick, label }) => {
    return <button onClick={onClick}>{label}</button>;
}

export default ButtonHoc;