import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import {siteThemes} from '../constants/siteThemes'

function AppThemeProvider({ children }) {

 // Applications theme (localStorage or default)
 const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');
 localStorage.setItem('theme', theme);

 function toggleTheme(theme) {
   setTheme(theme);
 }

 const contentTheme = createTheme({
   palette: {
     primary:{
       main: siteThemes[theme].primary,
     },
     secondary:{
       main:  siteThemes[theme].secondary,
     },
     tertiary:{
       main: siteThemes[theme].tertiary,
     }
   }
 })
 
 return (
   <ThemeContext.Provider value={{theme, toggleTheme}}>
    <ThemeProvider theme={contentTheme}> 
     {children}
    </ThemeProvider>
   </ThemeContext.Provider>
 );
}

export default AppThemeProvider;




