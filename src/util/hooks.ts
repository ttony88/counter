import { useEffect, useRef } from "react";

export default function useUpdateEffect(effect: () => void, dependencies: unknown[] = []) {
    const isInitialMount = useRef(true);
  
    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        return effect();
      }
    }, dependencies);
  }