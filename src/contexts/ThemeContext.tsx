import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  mode: Theme;
  toggleMode: () => void;
  setMode: (mode: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<Theme>('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('theme') as Theme | null;
    if (savedMode) {
        setModeState(savedMode);
    } else {
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        if (query.matches) {
            setModeState('dark');
        }
    }

    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event: MediaQueryListEvent) => {
         // Only update if user hasn't manually overridden (optional, but good UX)
         // For simplicity, let's behave like the original App.tsx
         if (event.matches) {
            setModeState('dark');
        } else {
            setModeState('light');
        }
    };

    query.addListener(listener);

    return () => {
        query.removeListener(listener); 
    }
  }, []);

  const setMode = (newMode: Theme) => {
      setModeState(newMode);
      localStorage.setItem('theme', newMode);
  }

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
