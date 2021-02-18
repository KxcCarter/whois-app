import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import DataTable from './DataTable';

const DataDisplay = ({ apiResponse }) => {
  return (
    <Grid item zeroMinWidth>
      <Paper>
        <Box>
          <Typography variant="h3" align="center">
            Search Results
          </Typography>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} zeroMinWidth>
              {apiResponse && <DataTable data={apiResponse.WhoisRecord} />}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default DataDisplay;