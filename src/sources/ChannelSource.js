import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://react-stack.firebaseio.com/channels');

let ChannelSource = {
  getChannels: {
    remote(state, selectedChannelKey){
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapshot)=> {
          var channels = dataSnapshot.val();
          selectedChannelKey = selectedChannelKey || _.keys(channels)[0];
          var selectedChannel = channels[selectedChannelKey];
          if(selectedChannel){
            selectedChannel.selected = true;
          }
          resolve(channels);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource;
