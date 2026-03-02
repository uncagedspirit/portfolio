import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

// Dark mode removed. ThemeProvider kept as a no-op wrapper
// so nothing breaks if it's still imported in App.jsx.
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}