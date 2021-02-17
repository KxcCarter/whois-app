import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core';

import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2"> This is the App component </Typography>
        <SearchBar />
      </Box>
    </Container>
  );
};

export default App;
