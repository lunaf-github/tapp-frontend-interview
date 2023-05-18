import { useState } from 'react';
import { Circle } from '@mui/icons-material';
import { siteThemes } from '../../../constants/siteThemes';
import useThemeContext from '../../../utils/useThemeContext';
import { 
  Button, 
  Box, 
  Typography, 
  MenuItem, 
  Menu, 
} from '@mui/material';


function ThemeMenuContents() {
  // Options from siteThemes constant. Capitalize first letter. 
  const options = [];

  for (const [color] of Object.entries(siteThemes)) {
    const firstLetter = color.charAt(0).toUpperCase()
    const otherLetters = color.slice(1);
    const colorName = firstLetter + otherLetters;
    options.push({colorName, colorValue: color});
  }

  //State
  const {theme, toggleTheme} = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  
  //Handler functions
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    toggleTheme(options[index].colorValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ width: '100%', maxWidth: '100%', padding: '1rem', }}>
      <Typography variant='h1' fontWeight='bold' fontSize='large' sx={{fontWeight:'bold', marginBottom:'1rem'}}>Site Styles</Typography>
      <Typography>Theme</Typography>

      <Button
        aria-label="choose theme"
        aria-expanded={open ? 'true' : undefined}
        color="secondary"
        sx={{backgroundColor: siteThemes[theme].primary, width: '100%', marginBottom: '1rem'}}
        onClick={handleClickListItem}
      >
        {theme}
      </Button>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        hidden={!open}
        open={open}
        className='Menu'
        onClose={handleClose}
        PaperProps={{  
          style: {  
            width: 199,  
            height:85,
            marginTop: '10px',
          },
        }} 
      >
        {options.map((option, index) => (
          <MenuItem
            key={`${option}${index}`}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            sx={{
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: 'large',
              borderRadius: 2,
              margin: '0 5px',
            }}
          >
            {option.colorName} 
            <div>
              <Circle sx={{color: siteThemes[option.colorValue].primary, }}/>
              <Circle sx={{color: siteThemes[option.colorValue].secondary}}/>
              <Circle sx={{color: siteThemes[option.colorValue].tertiary}}/>
            </div>
          </MenuItem>
        ))}
      </Menu>
      <Box hidden={open}>
        <Typography>Theme Colors</Typography>
        <div>
          <Circle fontSize='large' sx={{color: siteThemes[theme].primary}}/>
          <Circle fontSize='large' sx={{color: siteThemes[theme].secondary}}/>
          <Circle fontSize='large' sx={{color: siteThemes[theme].tertiary}}/>
        </div>
      </Box>
    </Box>
  );
}

export default ThemeMenuContents;