import React from 'react';
import BaseComponent from './BaseComponent';
import {
  Button
  ,Glyphicon
} from 'react-bootstrap';

class Nav extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleToggleSidebar');
  }

  handleToggleSidebar(event) {
    event.preventDefault();
    if(this.props.toggleSidebar) {
      this.props.toggleSidebar(event);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top no-margin">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-8">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Button
              bsStyle="link" bsSize="large"
              style={{float:'left', margin: 5, padding: '8px 16px'}}
              onClick={this.handleToggleSidebar}>
                <Glyphicon glyph="menu-hamburger" />
            </Button>
            <a className="navbar-brand" href="#/dashboard">Contact Admin</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-8">
            {this.props.quickSearch}
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  toggleSidebar: React.PropTypes.func
  ,quickSearch: React.PropTypes.element
};

export default Nav;
