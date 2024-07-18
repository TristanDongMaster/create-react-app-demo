import { useState, useDebugValue } from 'react';
import { useInterval } from './useInterval.js';

export function useCounter(delay) {
  const [count, setCount] = useState(0);
  useDebugValue(count ? 'Online' : 'Offline');
  useInterval(() => {
    setCount(c => c + 1);
  }, delay);
  return count;
}
