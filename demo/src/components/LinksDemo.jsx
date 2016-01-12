import React from 'react';
import { Panel } from 'react-bootstrap';
import { HttpLink, EmailLink, PhoneLink } from '../../../dist/react-stack';

class LinksDemo extends React.Component {
  constructor(){
    super();
  }

  render(){

    return (
      <Panel header="Links Helpers">
        <div><HttpLink displayText="Emmanuel Morales" value="github.com/emb0624" /></div>
        <div><EmailLink value="emmanuel.morales@headspring.com" /></div>
        <div><PhoneLink displayText="(787) 370-9596" value="7873709596" /></div>
      </Panel>
    );
  }
}

export default LinksDemo;
