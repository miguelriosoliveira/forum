import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionDetails from './pages/QuestionDetails';

import App from './App';
import RoutesConfig from './RoutesConfig';

export default function Routes() {
  return (
    <App>
      <BrowserRouter>
        <Switch>
          <Route exact path={RoutesConfig.home()} component={Home} />
          <Route exact path={RoutesConfig.questionDetails()} component={QuestionDetails} />
        </Switch>
      </BrowserRouter>
    </App>
  );
}
