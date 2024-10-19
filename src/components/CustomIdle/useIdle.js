import { useEffect, useRef, useState } from "react";

const UseIdle = (delay) => {
  const [idle, setIdle] = useState(delay);

  const timerId = useRef(null);
   
  useEffect(() => {
    setup();

    return () => {
        cleanUp();
    }
  });

  const startTimer = () => {
    timerId.current = setTimeout(setInactive, delay);
  }

  const setInactive = () => {
    setIdle(true);
  }

  const resetTimer = () => {
    clearTimeout(timerId.current);
    goActive();
  }

  const goActive = () => {
    setIdle(false);
    startTimer();
  };


  const setup = () => {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    document.addEventListener("MSPointerMove", resetTimer, false);
    //edge case
    //if tab is changed or is out of focus
    window.addEventListener("blur", startTimer, false);
    window.addEventListener("focus", resetTimer, false);
  };

  const cleanUp = () => {
    document.removeEventListener("mousemove", resetTimer);
    document.removeEventListener("mousedown", resetTimer);
    document.removeEventListener("keypress", resetTimer);
    document.removeEventListener("DOMMouseScroll", resetTimer);
    document.removeEventListener("mousewheel", resetTimer);
    document.removeEventListener("touchmove", resetTimer);
    document.removeEventListener("MSPointerMove", resetTimer);
    //edge case
    //if tab is changed or is out of focus
    window.removeEventListener("blur", startTimer);
    window.removeEventListener("focus", resetTimer);
    // memory leak
    clearTimeout(timerId.current);
  };

  return idle;
};

export default UseIdle;
