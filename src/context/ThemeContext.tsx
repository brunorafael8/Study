import React, { useContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { DefaultTheme } from '../theme/theme';
import { dark, light } from '../theme';

interface Themes {
  [key: string]: DefaultTheme;
}

export interface ThemeProviderState {
  toggleTheme: () => void;
  theme: string;
}

export const ThemeContext = React.createContext<ThemeProviderState>({
  toggleTheme() {
    throw Error('ThemeContext not yet initialized.');
  },
  theme: '',
});

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = (props: Props) => {
  const { children } = props;

  const [theme, setTheme] = useState('light');

  const themes: Themes = { light, dark };

  const getTheme = (name: string): DefaultTheme => themes[name] || light;

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setTheme((t) => (theme === 'light' ? 'dark' : 'light'));
      },
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledProvider theme={() => getTheme(theme)}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = ThemeContext.Consumer;

export const useTheme = () => {
  return useContext(ThemeContext);
};
