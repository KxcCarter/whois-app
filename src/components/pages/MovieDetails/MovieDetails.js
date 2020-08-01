import React, { Component } from 'react';
import { connect } from 'react-redux';

// --- Material-UI ---
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    maxWidth: 350,
    height: 450,
  },
});

class MovieDetails extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    console.log('Movie id we are searching for:', params.id);
    this.props.dispatch({
      type: 'GET_SINGLE_MOVIE',
      payload: params.id,
    });
  }

  render() {
    const { classes } = this.props;

    console.log(this.props.details.genres);
    return (
      <Box>
        <Button variant="text" onClick={() => this.props.history.push('/')}>
          Back to list
        </Button>
        <Card>
          <CardHeader title={this.props.details.title} />
          <CardMedia
            className={classes.root}
            image={this.props.details.poster}
            title={this.props.details.title}
          />
          <CardContent>
            <Typography variant="caption">
              {this.props.details.genres}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.details.description}
            </Typography>
            <Box m={2}>
              <Button>Edit Movie</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

const mapStoreToProps = (store) => {
  return { details: store.singleMovie };
};

export default connect(mapStoreToProps)(withStyles(styles)(MovieDetails));
