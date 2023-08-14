import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Iana Konovalova'}{' '}
      <Link color="inherit" target="_blank" href="https://www.linkedin.com/in/iana-konovalova/">
        Linkedin
      </Link>{' '}
      <Link color="inherit" target="_blank" href="https://github.com/YanaKonovalova93/">
        GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const Layout = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        mr: 'auto',
        ml: 'auto',
        pr: 15,
        pl: 15,
      }}
    >
      <CssBaseline />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 1,
          mt: 3,
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};
