import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './views/home'
import Components from './views/components'
import Store from './views/store'
export default function App() {
  return (
    <Router>
      <Home />
      <Switch>
          <Route path='/store' component={Store}></Route>
          <Route path='/components' component={Components}></Route>
      </Switch>
    </Router>
  );
}

