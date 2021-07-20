import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentLayout from './hoc/ContentLayout';

import PrivateRoute from './components/PrivateRoute';
import Authorization from './pages/Authorization';
import Main from './pages/Main';
import './App.css';

function App(props) {
  return (
    <>
      {/* props.isAuthenticated */}
      <ContentLayout isAuthenticated={localStorage.getItem('isAuthenticated')}>
        <Switch>
          <Route path='/' component={Authorization} exact />
          <PrivateRoute path='/main' component={Main} />
        </Switch>
      </ContentLayout>
    </>
  );
}

export default App;
