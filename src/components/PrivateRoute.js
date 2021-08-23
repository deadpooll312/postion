import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOGIN } from '../consts/routes';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  fallback = LOGIN,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: fallback, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
