import React, { Component } from 'react';
import { connect } from 'react-redux';

// --- Material-UI ---
import Typography from '@material-ui/core/Typography';
import { Box, Button, TextField, Paper } from '@material-ui/core';

class EditMovie extends Component {
  state = {
    title: this.props.details.title,
    description: this.props.details.description,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const id = params.id;
    console.log('Movie id we are searching for:', id);

    this.props.dispatch({
      type: 'GET_SINGLE_MOVIE',
      payload: id,
    });
  }

  handleChange = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  //   handleSave = () => {
  //     this.props.dispatch({
  //       type:
  //     });
  //   };

  handleCancel = () => {
    this.setState({
      title: this.props.details.title,
      description: this.props.details.description,
      poster: this.props.details.poster,
      genres: [this.props.details.genres],
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <Box>
        <Button variant="text" onClick={this.handleCancel}>
          Back to list
        </Button>
        <Box>
          <Paper elevation={3}>
            <Box p={2}>
              <TextField
                id="standard-multiline-flexible"
                label="Title"
                multiline
                rowsMax={3}
                value={this.state.title}
                onChange={this.handleChange('title')}
              />
            </Box>
            <Box p={2}>
              <img
                src={this.props.details.poster}
                aria-label="it's a picture"
                alt={this.props.details.title}
              ></img>
            </Box>
            <Box p={2}>
              <Typography variant="caption">
                {this.props.details.genres}
              </Typography>
              <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                rowsMax={6}
                fullWidth={true}
                value={this.state.description}
                onChange={this.handleChange('description')}
              />

              <Box m={2}>
                <Button>Save Changes</Button>
                <Button>Cancel</Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    );
  }
}

const mapStoreToProps = (store) => {
  return { details: store.singleMovie };
};

export default connect(mapStoreToProps)(EditMovie);
