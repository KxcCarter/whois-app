import React, { Component } from 'react';
import { connect } from 'react-redux';

class TESTMOVIEITEM extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SINGLE_MOVIE',
      payload: 6,
    });
  }

  render() {
    console.log(this.props.store.singleMovie);
    return (
      <div>
        <h1>Something is happening!</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { store };
};

export default connect(mapStoreToProps)(TESTMOVIEITEM);
