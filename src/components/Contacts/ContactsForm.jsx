import React from 'react';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { FormBox } from './ContactsForm.styled';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const initialValues = {
//   name: '',
//   number: '',
// };

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // const onSubmit = (value, { resetForm }) => {
  //   event.preventDefault();
  //   handleSubmit(value);

  //   resetForm();
  // };

  const handleSubmit = e => {
    e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   console.log(data)

  //  const name = data.get('name')
  //  const number = data.get('number')

  const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isInContacts = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { name, number};
    dispatch(addContact(newContact));
    form.reset();
      return;
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Add contact
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              type="text"
              pattern="^[A-Za-z\u0080-\uFFFF ']+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Number"
              type="tel"
              pattern="^(\+?[0-9.\(\)\-\s]*)$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
  );

};



// (
//   <Formik initialValues={initialValues} onSubmit={onSubmit}>
//     <FormBox>
//       <label>
//         Name
//         <Field
//           type="text"
//           name="name"
//           pattern="^[A-Za-z\u0080-\uFFFF ']+$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label>
//         Number
//         <Field
//           type="tel"
//           name="number"
//           pattern="^(\+?[0-9.\(\)\-\s]*)$"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </FormBox>
//   </Formik>
// );