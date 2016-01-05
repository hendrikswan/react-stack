import React from 'react';
import BaseComponent from './BaseComponent';

class Panel extends BaseComponent {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="col-xs-6 col-sm-3 text-center">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.title}</h3>
          </div>
          <div className="panel-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
Panel.propTypes = {
  title: React.PropTypes.string
  ,children: React.PropTypes.node
};

export default Panel;
