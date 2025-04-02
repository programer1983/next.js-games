'use client';

import useDarkMode from "../../Hooks/useDarkMode";
import { useContext, createContext } from "react";

const ThemeContext = createContext()
export function useTheme() {
  return useContext(ThemeContext)
}


export default function ThemeProvider({children}) {
  const { isDarkMode, toggleTheme } = useDarkMode()


  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
       {children}
    </ThemeContext.Provider>
  )
}



