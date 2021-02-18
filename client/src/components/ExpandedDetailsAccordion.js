import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DataTable from './DataTable';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ExpandedDetailsAccordion({ data, title }) {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={handleClick}
      >
        <Typography className={classes.heading}>
          {clicked ? title : 'click to expand'}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DataTable data={data} dense />
      </AccordionDetails>
    </Accordion>
  );
}
