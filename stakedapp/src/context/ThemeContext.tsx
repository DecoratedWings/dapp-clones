import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

export interface IThemeProvider {
    currentTheme: DefaultTheme;
    setNewTheme: (args: DefaultTheme) => void
}

export const ThemeContext = createContext<IThemeProvider>({} as IThemeProvider);