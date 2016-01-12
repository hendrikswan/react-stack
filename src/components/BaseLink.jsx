import React from 'react';
import BaseComponent from './BaseComponent.jsx';

// Base Link
class BaseLink extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('handleClick');
  }
  handleClick(event) {
    event.stopPropagation();
    this.props.onClick(event);
  }
  render(){
    const url = this.props.linkType + this.props.value;
    return <a {...this.props} href={url} onClick={this.handleClick}>{this.props.displayText || this.props.value}</a>;
  }
}

BaseLink.propTypes = {
  displayText: React.PropTypes.string
  ,linkType: React.PropTypes.string
  ,onClick: React.PropTypes.func
  ,value: React.PropTypes.node.isRequired
};

BaseLink.defaultProps = {
  linkType: 'http://'
  ,onClick: () => {}
};

export default BaseLink;
