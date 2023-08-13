import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/Contacts/ContactsList';
import { ContactsForm } from 'components/Contacts/ContactsForm';
import {Filter} from 'components/Filter/Filter'
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';



export default function Contacts() {
  const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    
  return (
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="sm">
          <ContactsForm />
      <div>{isLoading && 'Request in progress...'}</div>
       <Filter />
      <ContactsList />
          </Container>
        </Box>
  );
}

// export default function Contacts() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <Helmet>
//         <title>Your contacts</title>
//       </Helmet>
//       <ContactsForm />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <Filter />
//       <ContactsList />
//     </>
//   );
// }

// {/* <Container sx={{ py: 8 }} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="div"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random?wallpapers"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container> */}


{/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}