import React, { useContext } from 'react'
import { ThemeContext } from './GrandParent';

const Child = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div>{theme} - <button className='bg-green-600 rounded-md px-2 py-2 text-white' onClick={() => changeTheme()}>Change Theme</button></div>
  )
}

export default Child