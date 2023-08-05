import { useState, useEffect } from "react";

export const useLocalStorage = (key, defValue) => {
  const [storage, setStorage] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [key, storage]);

  return [storage, setStorage];
};