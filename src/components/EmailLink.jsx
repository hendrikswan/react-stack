import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import BaseLink from './BaseLink.jsx';

// Email Link
class EmailLink extends BaseComponent {
  constructor(props) {
    super(props);
  }
  render(){
    return <BaseLink {...this.props} linkType="mailto:" />;
  }
}

export default EmailLink;
