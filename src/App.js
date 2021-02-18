import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container } from '@material-ui/core';

import SearchBar from './components/SearchBar';
import DataDisplay from './components/DataDisplay';

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);
  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h2" align="center">
          WHOIS Search
        </Typography>
        <SearchBar setApiResponse={setApiResponse} />
        {apiResponse && <DataDisplay apiResponse={apiResponse} />}
      </Box>
    </Container>
  );
};

export default App;
