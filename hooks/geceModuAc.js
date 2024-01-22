// import { useEffect, useState } from "react";
import { useLocalStroge } from "./localStrogeKullan";

export const useGeceModu = (initialValue) => {
  // const storedValue = localStorage.getItem("darkMode");
  // const value = storedValue != null ? storedValue : initialValue;

  const [darkMode, setDarkMode] = useLocalStroge("darkMode",initialValue);
  // useEffect(() => {
  //   localStorage.setItem("darkMode", darkMode);
  // }, [darkMode]);
  return [darkMode, setDarkMode];
};
