import React, { useState } from 'react';
import { Grid, Paper, Box, TextField, Button } from '@material-ui/core';

// import RadioButtonGroup from './RadioButtonGroup';

const SearchBar = ({ handleSearchSubmit }) => {
  const [searchValue, setSearchValue] = useState('google.com');
  // const [searchType, setSearchType] = useState('domain');

  // const selectSearchType = (event) => {
  //   setSearchType(event.target.value);
  // };

  return (
    <Paper>
      <Box m={3} p={3}>
        <form onSubmit={(event) => handleSearchSubmit(event, searchValue)}>
          <Grid container spacing={1} justify="center" alignItems="center">
            {/* <Grid item xs={8} sm={3}>
              <Box paddingBottom={1}>
                <RadioButtonGroup
                  searchType={searchType}
                  selectSearchType={selectSearchType}
                />
              </Box>
            </Grid> */}

            <Grid item xs={12}>
              <TextField
                label="Search for a Domain or IP"
                variant="outlined"
                type="search"
                value={searchValue}
                fullWidth
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Grid>

            <Grid item xs={4}>
              <Button type="submit" variant="contained" size="large" fullWidth>
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
