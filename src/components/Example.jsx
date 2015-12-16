import React from 'react';

class Example extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <div>
        <header>{`I'm Example Component`}</header>
      </div>
    );
  }
}

Example.propTypes = {
  children: React.PropTypes.node
};

export default Example;
