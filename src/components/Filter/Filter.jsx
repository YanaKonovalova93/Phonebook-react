import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { selectFilter} from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
      <TextField
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        label="Find contact by name"
        variant="standard"
      />
    </Box>
  );
};
