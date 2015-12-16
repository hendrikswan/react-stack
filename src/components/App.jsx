import React from 'react';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <div>
        <header>{`Test App`}</header>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
