import React from 'react';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { FormBox } from './ContactsForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = (value, { resetForm }) => {
    handleSubmit(value);

    resetForm();
  };

  const handleSubmit = ({ name, number }) => {
    const isInContacts = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { name, number};
    dispatch(addContact(newContact));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormBox>
        <label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormBox>
    </Formik>
  );
};
