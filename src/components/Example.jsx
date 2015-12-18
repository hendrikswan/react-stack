import React from 'react';
import { Button, Well } from 'react-bootstrap';

class Example extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <Well>
        <header>{`I'm Example Component`}</header>
        <Button bsStyle="primary">{`Say Hello!!!!`}</Button>
      </Well>
    );
  }
}

Example.propTypes = {
  children: React.PropTypes.node
};

export default Example;
