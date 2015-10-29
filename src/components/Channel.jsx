import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {ListItem} = mui;

class Channel extends React.Component {
  constructor(props){
    super(props);
  }

  onClick(){
    Actions.channelOpened(this.props.channel);
  }

  render(){
    let style = {};

    if(this.props.channel.selected){
      style.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem
        href={'/#/chat/' + this.props.channel.key}
        style={style}
        key={this.props.channel.key}
      >{this.props.channel.name}</ListItem>
    );
  }
}

export default Channel;
