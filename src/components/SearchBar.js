import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, TextField, Button } from '@material-ui/core';
import axios from 'axios';

import RadioButtonGroup from './RadioButtonGroup';

const SearchBar = ({ setApiResponse }) => {
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
    setApiResponse(data);
  };

  const selectSearchType = (event) => {
    setSearchType(event.target.value);
  };

  return (
    <Paper>
      <Box m={3} p={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item xs={8} sm={3}>
              <Box paddingBottom={1}>
                <RadioButtonGroup
                  searchType={searchType}
                  selectSearchType={selectSearchType}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                label="Search for a Domain or IP"
                variant="outlined"
                type="search"
                value={searchValue}
                fullWidth
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={4} sm={12}>
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
