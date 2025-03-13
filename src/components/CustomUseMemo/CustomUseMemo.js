import { useRef } from "react";

const CustomUseMemo = (factory, deps) => {
  const ref = useRef({ deps: [], value: undefined });

  const hasChanged =
    !deps || deps.some((dep, index) => dep !== ref.current.deps[index]);

  if (hasChanged) {
    ref.current.deps = deps;
    ref.current.value = factory();
  }

  return ref.current.value;
};

export default CustomUseMemo;
