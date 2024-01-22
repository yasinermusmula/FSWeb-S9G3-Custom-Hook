import React, { useState } from "react";

export const useLocalStroge = (key, initialValue) => {
  const [storage, setStroge] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return storedValue != null ? storedValue : initialValue;
  });

  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStroge(value);
  }

  return [storage, updateStorage];
};
