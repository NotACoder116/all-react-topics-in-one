import { useRef, useState } from 'react'

const CustomStateWithHistory = (initialValue) => {
    const [invalue, setInitialValue] = useState(initialValue);
    const history = useRef([0]);
    const historyIndex = useRef(0);

    const setState = (value) => {
        history.current.push(value+1);
        historyIndex.current = history.current.length-1;
        setInitialValue(value+1);
    }

    const goForward = () => {
        if (historyIndex.current === history.current?.length-1) return;
        historyIndex.current++;
        setInitialValue(history.current[historyIndex.current]);
    }

    const goPrevious = () => {
        if (historyIndex.current === 0) return;
        historyIndex.current--;
        setInitialValue(history.current[historyIndex.current]);
    }



  return { goPrevious,  goForward, invalue, setState }
}

export default CustomStateWithHistory