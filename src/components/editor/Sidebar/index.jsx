import { useState } from 'react';
import styled from "styled-components";
import StyleIcon from '@mui/icons-material/Style';
import { IconButton, Menu } from '@mui/material'
import { siteThemes } from '../../../constants/siteThemes';
import useThemeContext from '../../../utils/useThemeContext';
import ThemeMenuContents from './ThemeMenuContents';


// Component Styles
const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;

const iconButtonSides = 50;


/** Sidebar view of the Editor page */
function Sidebar(props) {

  //component state
  const { theme } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  //Handle functions
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root >
      <IconButton color='secondary'
        onClick={handleClickListItem}
        sx={{
          width: iconButtonSides,
          height: iconButtonSides,
          borderRadius: 2,
          backgroundColor: open && siteThemes[theme].primary,
        }}
      >
        <StyleIcon fontSize='large'/>
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{vertical: 'center', horizontal: 'left'}}
        transformOrigin={{vertical: 'center', horizontal: 'right'}}
        //Referrenced PaperProps using StackOverflow:  https://stackoverflow.com/questions/58545424/control-the-width-of-menu-component-in-material-ui
        PaperProps={{  
          style: {  
            width:230,
            height:230,
            marginTop: '5px',
          },  
        }} 
      >
        <ThemeMenuContents/>
      </Menu>
    </Root>
  );
}

export default Sidebar;
