// @flow

import React, { Component } from 'react';
import Radium from 'radium';
import load from '../actions/load';
import actionTypes from '../constants/actionTypes';
import styles from '../constants/styles';

class App extends Component {
  constructor(props: Object) {
    super(props);
    (this: any).handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.dispatch(load());
  }

  render(): Object {
    const loadingStatus = (): Object => {
      switch (this.props.loadingStatus) {
        case actionTypes.LOADING:
          return <div>Loading...</div>;
        case actionTypes.LOADED:
          return <div>Loaded :)</div>;
        default:
          return <div>Press the button!!!</div>;
      }
    };

    return (<div style={styles.appContainer}>
      <div style={[styles.dialogBox, styles.mainFont]}>
        <div style={styles.dialogContent}>
          { loadingStatus() }
        </div>
        <button
          style={[
            styles.button,
            styles.mainFont,
            styles.buttonFont,
          ]}
          onClick={this.handleButtonClick}
          disabled={this.props.loadingStatus === actionTypes.LOADING}
        >
          Let's load some stuff!
        </button>
      </div>
    </div>);
  }
}

export default Radium(App);
