import React from 'react';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterLabel } from './Filter.styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// const initialValues = '';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  function onChange(event) {
    const filterInput = event.target.value;
    dispatch(setFilterValue(filterInput));
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type="text" name="filter" value={value} onChange={onChange} label="Find contact by name" variant="standard" />
    </Box>
  );
  
  
  
  
  //   <Formik initialValues={initialValues}>
  //     <FilterLabel>
  //       Find contacts by name
  //       <Field type="text" name="filter" value={value} onChange={onChange} />
  //     </FilterLabel>
  //   </Formik>
  // );
};
