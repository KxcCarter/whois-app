import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataTable({ data }) {
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
            <p style={{ cursor: 'pointer' }}>click for expanded info</p>
          </TableCell>
        </TableRow>
      );
    } else {
      return (
        <TableRow key={index} hover>
          <TableCell align="left">
            <strong>{item}</strong>
          </TableCell>
          <TableCell align="left">{data[item]}</TableCell>
        </TableRow>
      );
    }
  });

  //   // //ES6 syntax
  //   dataKeys.forEach((key) => {
  //     if (typeof data[key] == 'object') {
  //       console.log('Find using ES6', data[key]);
  //     }
  //   });

  //   for (let item in data) {
  //     if (Object.values(item) === 'Object') {
  //       console.log(`It's a string!`);
  //     } else {
  //       console.log(item);
  //     }
  //   }

  //     const results = whoIsData.map((item, index) => {
  //       return (
  //         <TableRow key={index}>
  //           <TableCell align="right">{item[0]}</TableCell>
  //           <TableCell align="right">
  //             {item[1] === Object ? 'This is an object' : item[1]}
  //           </TableCell>
  //         </TableRow>
  //       );
  //     });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="left">Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
          {formattedData}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
