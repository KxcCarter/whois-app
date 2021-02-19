import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';
import DataTable from './DataTable';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    minWidth: '80vw',
    maxWidth: '85vw',
    maxHeight: '75vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
  },
}));

export default function ExpandedDetailsModal({ title, data }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dataKeys = Object.keys(data);

  const formattedData = dataKeys.map((item, index) => {
    if (typeof data[item] == 'object') {
      return (
        <TableRow key={index} hover>
          <TableCell align="left">
            <strong>{item}</strong>
          </TableCell>
          <TableCell align="left">
            <ExpandedDetailsModal data={data[item]} title={item} />
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

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <DataTable data={data} dense />
    </div>
  );

  return (
    <div>
      <Typography
        variant="body2"
        onClick={handleOpen}
        style={{ cursor: 'pointer' }}
      >
        click for more info
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
