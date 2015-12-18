import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import { Router, Route } from 'react-router';

let routes = (<Router>
  <Route component={App} path="/" />
</Router>);

ReactDOM.render(routes, document.getElementById('container'))
