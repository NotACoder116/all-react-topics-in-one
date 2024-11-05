import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Child from "./Child";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
  );
};

const ThemeApplier = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (<div>
        <p>{theme}</p>
        <button className="px-2 py-2 border border-cyan-400 bg-cyan-400 rounded-md" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>);
}

const RandomPractice = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const timerId = useRef(null);
  const handleInput = (value) => {
    console.log(input, value);
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
        setCount(prev => prev-1);
    }, 1000);
   
    return () => clearInterval(timerId.current);
  });

  return (
    <div>
        <div>{count}</div>
      <input
        type="text"
        className="py-2 px-2 border border-cyan-400 rounded-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Child onHandleInput={handleInput} />

      <ThemeProvider>
        <ThemeApplier/>
      </ThemeProvider>
    </div>
  );
};

export default RandomPractice;
