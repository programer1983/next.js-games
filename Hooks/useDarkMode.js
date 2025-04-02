"use client";

import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    document.body.classList.toggle('dark-theme', isDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode)
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
  };

  return { isDarkMode, toggleTheme };
}