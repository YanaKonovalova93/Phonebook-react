import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <Typography variant="h6" color="inherit" noWrap>
        {user.email}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(logOut())}
      >
        Sign out
      </Button>
    </Box>
  );
};
