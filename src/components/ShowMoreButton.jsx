import React from 'react';
import BaseComponent from './BaseComponent';

class ShowMoreButton extends BaseComponent{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className="btn btn-default"
        {...this.props} >
        Show more
      </button>
    );
  }
}

export default ShowMoreButton;
