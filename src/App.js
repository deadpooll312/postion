import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ContentLayout from './hoc/ContentLayout';

import PrivateRoute from './components/PrivateRoute';
import Authorization from './pages/Authorization';
import Main from './pages/Main';
import UploadMap from './pages/UploadMap';
import { Context } from './context';
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
          <Route path="/login" component={Authorization} exact />
          <PrivateRoute path="/" component={Main} exact />
          <PrivateRoute path="/upload/map" component={UploadMap} exact />
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
