import { useRef } from 'react'

const CustomUseEffect = (effectCallback, depends) => {
  const firstRender = useRef(true);
  const prevDepends = useRef([]);

  // Rendering the hook for the first time
  if (firstRender.current) {
    firstRender.current = false;

    const cleanup = effectCallback();
    return () => {
        if (cleanup && typeof cleanup == 'function') {
            cleanup();
        }
    }
  }

  // If the depends change or no dependies
   const dependancyChanged = depends ? JSON.stringify(prevDepends.current) !== JSON.stringify(depends) : true;

   if (dependancyChanged) {
    const cleanup = effectCallback();
        if (cleanup && typeof cleanup === 'function' && depends) {
            cleanup();
        }
   }

   prevDepends.current = depends || [];

}

export default CustomUseEffect