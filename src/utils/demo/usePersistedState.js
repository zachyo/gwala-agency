import { useEffect, useState } from "react";

const usePersistedState = ({ key, defaultValue }) => {
  const [state, setState] = useState(() => {
    try {
      const storedState = localStorage.getItem(key);
      return storedState !== null ? JSON.parse(storedState) : defaultValue;
    } catch (error) {
      console.error("Error parsing stored state:", error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      if (state !== undefined && state !== null) {
        localStorage.setItem(key, JSON.stringify(state));
      } else {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error("Error storing state to localStorage:", error);
    }
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
