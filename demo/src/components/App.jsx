import React from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import LinksDemo from './LinksDemo.jsx';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <PageHeader>{`React Reusable Components`}</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LinksDemo />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
