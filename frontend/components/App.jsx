import React from 'react';
import NavContainer from './nav_container';
import Question from './question';
import ItemsIndexContainer from './item_index_container';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div>

    <NavContainer/>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={ItemsIndexContainer} />
      <Route path={`/question/:question_id`} component={Question}/>
    </Switch>
  </div>
);

export default App;
