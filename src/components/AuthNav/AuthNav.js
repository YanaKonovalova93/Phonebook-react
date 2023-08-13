import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
  
      <ButtonGroup variant="outlined" aria-label="register button group" sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
        
      }}>
      <NavLink to="/register">
        <Button variant="contained" color='secondary'>Sign up</Button>
        </NavLink>
        <NavLink to="/login">
        <Button variant="contained" color='secondary'>Sign in</Button>
        </NavLink>
      </ButtonGroup>
   
  );
  
  
  
  
  
  //   <div>
  //     <NavLink to="/register">
  //     <Button color="inherit">
  //     Sign up
  //     </Button>
      
  //     </NavLink>
  //     <NavLink to="/login">
  //     <Button color="inherit">
  //     Sign in
  //     </Button>
      
  //     </NavLink>
  //   </div>
  // );
};