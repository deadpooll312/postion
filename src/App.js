import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentLayout from './hoc/ContentLayout';
import PrivateRoute from './components/PrivateRoute';
import { Context } from './context';
import { ROUTES } from './consts/routes';

import './App.css';

function App(props) {
  const [mapColor, setMapColor] = useState(null);

  function changeMapColor(color) {
    setMapColor(color);
  }

  return (
    <Context.Provider value={{ mapColor, changeMapColor }}>
      <ContentLayout isAuthenticated={props.isAuthenticated}>
        <Switch>
          {ROUTES.map(({ isPrivate, ...rest }) => {
            return isPrivate ? <PrivateRoute {...rest} /> : <Route {...rest} />;
          })}
        </Switch>
      </ContentLayout>
    </Context.Provider>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(App);
