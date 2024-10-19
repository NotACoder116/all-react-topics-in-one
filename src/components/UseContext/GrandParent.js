import React, { createContext, useState } from 'react'
import Parent from './Parent';

export const ThemeContext = createContext("Light");

const GrandParent = () => {
    const [theme, setTheme] = useState('Dark');

    const changeTheme = () => setTheme(theme === "Light" ? "Dark" : "Light");

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
        <Parent/>
    </ThemeContext.Provider>
  )
}

export default GrandParent