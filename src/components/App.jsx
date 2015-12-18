import React from 'react';
import {Col, Navbar} from 'react-bootstrap';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <div className="container-flexible">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              {`Testing React & Bootstrap`}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Col xs={12}>
          {this.props.children}
        </Col>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
