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
    this.props.dispatch({
      type: 'GET_SINGLE_MOVIE',
      payload: this.props.id,
    });
  }

  render() {
    console.log(this.props.id);
    return (
      <Card>
        <CardHeader title={this.props.title} subheader="September 14, 2016" />
        <CardMedia image={this.props.poster} title={this.props.title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(MovieDetails);
