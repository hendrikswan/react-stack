import React from 'react';
import { render } from 'react-dom';
import App from '../components/App.jsx';
import Example from '../components/Example.jsx';
import { Router, Route, IndexRoute } from 'react-router';

render((
  <Router>
    <Route component={App} path="/" >
      <IndexRoute component={Example} />
      <Route component={Example} path="Example" />
    </Route>
  </Router>
), document.getElementById('container'));
