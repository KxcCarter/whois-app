import React from 'react';
import { connect } from 'react-redux';

// --- Material-UI ---
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
  },
  media: {
    height: 400,
  },
});

const MovieItem = (props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={props.title} />
      <Box className={classes.root}>
        <CardMedia
          image={props.poster}
          title={props.title}
          className={classes.media}
        />
      </Box>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default connect()(MovieItem);
