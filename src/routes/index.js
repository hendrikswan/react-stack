import React from 'react';
import { render } from 'react-dom';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import { Router, Route } from 'react-router';

render((
  <Router>
    <Route component={App} path="/" >
      <Route component={Chat} path="chat" />
      <Route component={Chat} path="chat/:channel" />
      <Route component={Login} path="login" />
    </Route>
  </Router>
), document.getElementById('container'));
