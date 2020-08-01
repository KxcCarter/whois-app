import React, { Component } from 'react';
import { connect } from 'react-redux';

// --- Material-UI ---
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    const genres = this.props.details.genres;

    console.log(genres);
    return (
      <Card>
        <CardHeader title={this.props.details.title} />
        <CardMedia
          image={this.props.details.poster}
          title={this.props.details.title}
        />
        <CardContent>
          <Typography variant="caption">{genres}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.details.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => {
  return { details: store.singleMovie };
};

export default connect(mapStoreToProps)(MovieDetails);
