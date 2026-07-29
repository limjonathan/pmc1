import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'modern' | 'original';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('pmc-theme');
    return (saved as Theme) || 'modern';
  });

  useEffect(() => {
    localStorage.setItem('pmc-theme', theme);
    const root = window.document.documentElement;
    
    // We use Tailwind's 'dark' mode class mechanism to implement the original theme overlay
    if (theme === 'original') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
