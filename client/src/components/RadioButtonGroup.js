import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({
  searchType,

  selectSearchType,
}) {
  return (
    <FormControl component="fieldset" size="small">
      <FormLabel component="legend">Type of Search</FormLabel>
      <RadioGroup
        aria-label="type of search"
        name="search1"
        value={searchType}
        onChange={selectSearchType}
      >
        <FormControlLabel
          value="domain"
          control={<Radio size="small" />}
          label="Domain"
        />
        <FormControlLabel
          value="email"
          control={<Radio size="small" />}
          label="Email"
        />
        <FormControlLabel
          value="ip address"
          control={<Radio size="small" />}
          label="IP Address"
        />
      </RadioGroup>
    </FormControl>
  );
}
