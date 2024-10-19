import { useEffect, useState } from 'react'
import { Value } from 'sass';

const CustomDebounce = ( value, delay ) => {
    const [debounceValue, setDebounceValue] = useState(Value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(value);
      }, delay);

      return () => clearTimeout(handler);
    });

  return debounceValue;
}

export default CustomDebounce