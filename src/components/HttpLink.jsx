import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import BaseLink from './BaseLink.jsx';

// HTTP Link
class HttpLink extends BaseComponent {
  constructor(props) {
    super(props);
  }
  render(){
    return <BaseLink {...this.props} linkType="http://" />;
  }
}

export default HttpLink;
