import { useState, useCallback, useMemo } from "react";

export function useLocalStorage<T>(key: string, initialValue?: T) {
  const [state, setState] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setter = useCallback(
    (value: T | ((prev: T) => T)) => {
      setState(prev => {
        const newValue = value instanceof Function ? value(prev) : value;
        localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    },
    [key]
  );

  return useMemo(() => [state, setter] as const, [state, setter]);
}
