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

    const id = params.id;
    console.log('Movie id we are searching for:', id);

    this.props.dispatch({
      type: 'GET_SINGLE_MOVIE',
      payload: params.id,
    });
  }

  render() {
    const { classes } = this.props;

    console.log(
      'Logging this.props.details.genres:',
      this.props.details.genres
    );
    const genres = this.props.details.genres.map((item, index) => {
      return <span key={index}>{item} </span>;
    });
    return (
      <Box>
        <Box m={2}>
          <Button
            variant="outlined"
            onClick={() => this.props.history.push('/')}
          >
            Back to list
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              this.props.history.push(`/edit/${this.props.details.id}`)
            }
          >
            Edit Movie
          </Button>
        </Box>
        <Card>
          <CardHeader title={this.props.details.title} />
          <Box m={2}>
            <CardMedia
              image={this.props.details.poster}
              className={classes.root}
              title={this.props.details.title}
            />
          </Box>
          <CardContent>
            <Box m={1}>
              <Typography variant="caption">{genres}</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.details.description}
            </Typography>
            <Box m={2}>
              <Button
                variant="outlined"
                onClick={() =>
                  this.props.history.push(`/edit/${this.props.details.id}`)
                }
              >
                Edit Movie
              </Button>
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
