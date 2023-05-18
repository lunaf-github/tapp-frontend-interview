import { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function useThemeContext() {
  const theme  = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useThemeContext must be used withing ThemeProvider")
  }

  return theme;
}