import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentLayout from './hoc/ContentLayout';

import Authorization from './pages/Authorization';
import './App.css';

function App(props) {
  return (
    <>
      {/* props.isAuthenticated */}
      <ContentLayout isAuthenticated={false}>
        <Switch>
          <Route path='/' component={Authorization} exact />
          {/* <PrivateRoute path='/main' component={Main} /> */}
        </Switch>
      </ContentLayout>
    </>
  );
}

export default App;
