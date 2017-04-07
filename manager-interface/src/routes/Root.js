import React, { Component, PropTypes } from 'react';
import routes from './routes';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};