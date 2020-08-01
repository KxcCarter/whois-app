import React, { Component } from 'react';
import { connect } from 'react-redux';

// --- Material-UI ---
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class MovieItem extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SINGLE_MOVIE',
      payload: 6,
    });
  }

  render() {
    console.log(this.props.store.singleMovie);
    return (
      <Card>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(MovieItem);
