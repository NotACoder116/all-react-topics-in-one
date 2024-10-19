import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext("dark");

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeContextProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
    }

    const theme = isDarkTheme ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkTheme]);

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}