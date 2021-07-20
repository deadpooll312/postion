import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  fallback = '/',
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('isAuthenticated') ? (
          // isAuthenticated
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

export default PrivateRoute;
