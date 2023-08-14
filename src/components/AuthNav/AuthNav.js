import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export const AuthNav = () => {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="register button group"
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <NavLink to="/register">
        <Button variant="contained" color="secondary">
          Sign up
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="contained" color="secondary">
          Sign in
        </Button>
      </NavLink>
    </ButtonGroup>
  );
    }