import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
  
  export default function Home() {
    return (
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          mt: 4,
          height: 440,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'linear-gradient(rgba(46, 47, 66, 0.5),rgba(46, 47, 66, 0.5)),url(https://img.freepik.com/premium-photo/group-diverse-friends-taking-selfie-beach_53876-91925.jpg?w=2000)',
        }}
      >
        {<img style={{ display: 'none' }} src='https://img.freepik.com/premium-photo/group-diverse-friends-taking-selfie-beach_53876-91925.jpg?w=2000' alt='friends' />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Сreate your contact book
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
              Stay connected with friends using our contact book!
              </Typography>
              <NavLink to="/register">
        <Button variant="contained" color='secondary'>Sign up</Button>
        </NavLink>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  }