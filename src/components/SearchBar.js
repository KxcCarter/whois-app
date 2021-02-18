import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, TextField, Button } from '@material-ui/core';
import axios from 'axios';

import RadioButtonGroup from './RadioButtonGroup';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('google.com');
  const [searchType, setSearchType] = useState('domain');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Hey you here is the data:', { searchType }, { searchValue });

    const { data } = await axios.get('/api', {
      params: {
        domainName: searchValue,
      },
    });

    console.log(data.WhoisRecord);
  };

  const selectSearchType = (event) => {
    setSearchType(event.target.value);
  };

  return (
    <Paper>
      <Box m={3} p={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item xs={2}>
              <RadioButtonGroup
                searchType={searchType}
                selectSearchType={selectSearchType}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                label="Search for a Domain or IP"
                variant="outlined"
                type="search"
                value={searchValue}
                fullWidth
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={1}>
              <Button type="submit" variant="contained" size="large">
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default SearchBar;
