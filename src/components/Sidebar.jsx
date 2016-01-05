import React from 'react';
import BaseComponent from './BaseComponent';

export default class Sidebar extends BaseComponent {
  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            <a href="#/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#/contacts">Contacts</a>
          </li>
        </ul>
      </div>
    );
  }
}