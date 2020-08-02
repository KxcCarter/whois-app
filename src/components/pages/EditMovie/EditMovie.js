import React, { Component } from 'react';
import { connect } from 'react-redux';

// --- Material-UI ---
import Typography from '@material-ui/core/Typography';
import { Box, Button, TextField, Paper } from '@material-ui/core';

class EditMovie extends Component {
  state = {
    title: this.props.details.title,
    description: this.props.details.description,
    id: this.props.details.id,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    this.props.dispatch({
      type: 'GET_SINGLE_MOVIE',
      payload: params.id,
    });
  }

  handleChange = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  handleSave = () => {
    this.props.dispatch({
      type: 'UPDATE_MOVIE',
      payload: this.state,
    });
    this.props.history.push(`/details/${this.props.details.id}`);
  };

  handleCancel = () => {
    this.setState({
      title: this.props.details.title,
      description: this.props.details.description,
      poster: this.props.details.poster,
      genres: [this.props.details.genres],
    });
    this.props.history.push(`/details/${this.props.details.id}`);
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
                multiline
                rowsMax={3}
                value={this.state.title || this.props.details.title}
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
                multiline
                rowsMax={6}
                fullWidth={true}
                value={this.state.description || this.props.details.description}
                onChange={this.handleChange('description')}
              />

              <Box m={2}>
                <Button onClick={this.handleSave}>Save Changes</Button>
                <Button onClick={this.handleCancel}>Cancel</Button>
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
