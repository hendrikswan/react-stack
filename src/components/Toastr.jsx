import React from 'react';
import BaseComponent from './BaseComponent';
import ReactToastr from 'react-toastr';
import NotificationStore from './../stores/NotificationStore';
import NotificationConstants from './../constants/NotificationConstants';

const {ToastContainer} = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class Toastr extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleNotification');
  }

  componentDidMount() {
    // listen to notification events
    NotificationStore.addNotificationListener(this.handleNotification);
  }

  componentWillUnmount() {
    // unbind notification events
    NotificationStore.removeNotificationListener(this.handleNotification);
  }

  handleNotification(event) {
    switch(event.actionType) {
      case NotificationConstants.NOTIFICATION_SUCCESS:
        this.refs.toastContainer.success(event.message, event.title, event.options);
      break;
      case NotificationConstants.NOTIFICATION_ERROR:
        this.refs.toastContainer.error(event.message, event.title, event.options);
      break;
      case NotificationConstants.NOTIFICATION_WARNING:
        this.refs.toastContainer.warning(event.message, event.title, event.options);
      break;
      case NotificationConstants.NOTIFICATION_INFO:
        this.refs.toastContainer.info(event.message, event.title, event.options);
      break;
      default:
      break;
    }
  }

  render () {
    return (
      <ToastContainer
        {...this.props}
        ref="toastContainer"
        toastMessageFactory={ToastMessageFactory} />
    );
  }
}

Toastr.propTypes = {
  className: React.PropTypes.string
};

Toastr.defaultProps = {
  className: 'toast-bottom-right'
};

export default Toastr;
