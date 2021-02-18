import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import DataTable from './DataTable';

const DataDisplay = ({ apiResponse }) => {
  if (apiResponse) {
    // console.log(apiResponse);
  }

  return (
    <Paper>
      <Box>
        <Typography variant="h3" align="center">
          Search Results
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            {apiResponse && <DataTable data={apiResponse.WhoisRecord} />}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default DataDisplay;
