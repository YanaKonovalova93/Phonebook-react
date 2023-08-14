import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ContactsTwoToneIcon from '@mui/icons-material/ContactsTwoTone';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {filteredContacts.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <ContactsTwoToneIcon />
              </Avatar>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Name
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  {item.name}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Number
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  {item.number}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  size="medium"
                  onClick={() => {
                    dispatch(deleteContact(item.id));
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
