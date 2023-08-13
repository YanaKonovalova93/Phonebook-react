import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}>
    
        <NavLink to="/">
        <Button variant="contained" color="secondary">
        Home
        </Button>
      </NavLink>
      
      
      {isLoggedIn && (
        
          <NavLink to="/contacts">
            <Button variant="contained" color="secondary">
          Contacts
          </Button>
        </NavLink>
        
      )}
          </Box>

   
  );
};