import { useEffect } from 'react';

export function useInterval(callback, delay) {
  // const onTick = useEffectEvent(callback);
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
}
