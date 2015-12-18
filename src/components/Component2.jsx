import React from 'react';
import { Button, Well } from 'react-bootstrap';

class Component2 extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <Well>
        <header>{`I'm Component2`}</header>
        <Button bsStyle="primary">{`Say Hello!!!!`}</Button>
      </Well>
    );
  }
}

export default Component2;
