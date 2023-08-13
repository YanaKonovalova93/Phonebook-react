import * as React from 'react';
import AppB from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1, color:"primary.light" }}>
      <AppB position="static"  >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Navigation />
          </Typography>
          <Typography variant="h6" component="div" >
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Typography>
        </Toolbar>
      </AppB>
    </Box>
  );
  

  
  //   <header>
  //     <Navigation />
  //     {isLoggedIn ? <UserMenu /> : <AuthNav />}
  //   </header>
  // );
};