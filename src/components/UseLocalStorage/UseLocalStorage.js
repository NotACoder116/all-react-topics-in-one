import { useDebugValue, useEffect, useState } from 'react'

function savedValue(key, initialValue) {
   if (JSON.parse(localStorage.getItem(key))) {
    return JSON.parse(localStorage.getItem(key));
   }
   else if (initialValue instanceof Function) {
    initialValue();
   }
   else {
    return initialValue;
   }
}


function UseLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return savedValue(key, initialValue)
    });

    useDebugValue("Testinggg")
    useDebugValue([key, initialValue])

    useEffect(() => {
       localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

  return [value, setValue];
}

export default UseLocalStorage