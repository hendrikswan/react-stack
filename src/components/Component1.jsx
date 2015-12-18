import React from 'react';
import { Button, Well } from 'react-bootstrap';

class Component1 extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <Well>
        <header>{`I'm Component1`}</header>
        <Button bsStyle="primary">{`Say Hello!!!!`}</Button>
      </Well>
    );
  }
}

export default Component1;
