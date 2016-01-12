import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import BaseLink from './BaseLink.jsx';

// Phone Link
class PhoneLink extends BaseComponent {
  constructor(props) {
    super(props);
  }
  render(){
    return <BaseLink {...this.props} linkType="tel:" />;
  }
}

export default PhoneLink;
