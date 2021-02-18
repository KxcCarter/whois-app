import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ExpandedDetailsModal from './ExpandedDetailsModal';
import { Typography } from '@material-ui/core';
import ExpandedDetailsAccordion from './ExpandedDetailsAccordion';

const useStyles = makeStyles({
  table: {
    minWidth: '50vw',
  },
});

export default function DataTable({ data, dense }) {
  const classes = useStyles();

  const dataKeys = Object.keys(data);

  const formattedData = dataKeys.map((item, index) => {
    if (typeof data[item] == 'object') {
      return (
        <TableRow key={index} hover>
          <TableCell align="left">
            <strong>{item}</strong>
          </TableCell>
          <TableCell align="left">
            {/* <ExpandedDetailsModal data={data[item]} title={item} /> */}
            <ExpandedDetailsAccordion data={data[item]} title={item} />
          </TableCell>
        </TableRow>
      );
    } else {
      return (
        <TableRow key={index} hover>
          <TableCell align="left">
            <strong>{item}</strong>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body1">{data[item]}</Typography>
          </TableCell>
        </TableRow>
      );
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="simple table"
        size={dense ? 'small' : 'medium'}
      >
        <TableBody>{formattedData}</TableBody>
      </Table>
    </TableContainer>
  );
}
