import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, Container, LinearProgress } from '@material-ui/core';

import SearchBar from './components/SearchBar';
import DataDisplay from './components/DataDisplay';

import '../src/index.css';

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = async (event, searchValue) => {
    event.preventDefault();
    console.log('Calling API from react-app');
    setLoading(true);

    const { data } = await axios.get(`/api`, {
      params: {
        domainName: searchValue,
      },
    });
    if (data) {
      setLoading(false);
      setApiResponse(data);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h2" align="center">
          WHOIS Search
        </Typography>
        <SearchBar handleSearchSubmit={handleSearchSubmit} />

        {loading ? (
          <LinearProgress />
        ) : (
          apiResponse && <DataDisplay apiResponse={apiResponse} />
        )}
      </Box>
    </Container>
  );
};

export default App;
