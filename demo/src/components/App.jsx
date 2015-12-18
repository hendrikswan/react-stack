import React from 'react';
import { Col } from 'react-bootstrap';
import { Component1, Component2 } from '../../../dist/react-stack';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <section className="container-fluid">
        <Col>
          <h1>{`Testing Reusable Components`}</h1>
          <Component1 />
          <Component2 />
        </Col>
      </section>
    );
  }
}

export default App;
