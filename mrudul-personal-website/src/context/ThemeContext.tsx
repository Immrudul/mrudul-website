"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);
};
