

import { useEffect, useRef } from 'react';

const areEqual = (prevDeps, nextDeps) => {
    if (prevDeps === null) return false;
    if (prevDeps.length !== nextDeps.length) return false;
    
    for (let i=0;i<prevDeps.length;i++) {
        if (prevDeps[i] !== nextDeps[i]) return false;
    }

    return true;
}

const CustomUseMemo = (cb, deps) => {
  const memoRef = useRef(null);

  // If there is any change in dependancy, only then we have to run this condition
  if (!memoRef.current || !areEqual(memoRef.current.deps, deps)) {
    memoRef.current = {
        value: cb(),
        deps
    }
  }

  useEffect(() => {
    return () => {
        memoRef.current = null;
    }
  }, []);
  return memoRef.current.value;
}

export default CustomUseMemo