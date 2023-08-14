import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/Contacts/ContactsList';
import { ContactsForm } from 'components/Contacts/ContactsForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
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
        {contacts.length ? (
          <>
            <Filter />
            {isLoading && <Loader />}
            <ContactsList />
          </>
        ) : (
          <div>You don't have saved contacts...</div>
        )}
      </Container>
    </Box>
  );
}
