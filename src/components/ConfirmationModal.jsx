import React from 'react';
import BaseComponent from './BaseComponent';
import {Modal, Button} from 'react-bootstrap';

class ConfirmationModal extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('handleClose', 'handleSubmit');

    this.state = {
      show: props.show
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ show: newProps.show });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleClose();
    this.props.onSubmit(event);
  }

  render () {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>

        <Modal.Header closeButton={this.props.closeButton}>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{this.props.message}</Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleClose}>{this.props.cancelBtnText}</Button>
          <Button bsStyle="primary" onClick={this.handleSubmit}>{this.props.submitBtnText}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ConfirmationModal.propTypes = {
  title: React.PropTypes.string
  ,message: React.PropTypes.string
  ,cancelBtnText: React.PropTypes.string
  ,submitBtnText: React.PropTypes.string
  ,closeButton: React.PropTypes.bool
  ,show: React.PropTypes.bool.isRequired
  ,onSubmit: React.PropTypes.func.isRequired
};

ConfirmationModal.defaultProps = {
  title: 'Confirmation'
  ,message: 'Are you sure do you want to continue?'
  ,cancelBtnText: 'Cancel'
  ,submitBtnText: 'Continue'
  ,closeButton: true
};

export default ConfirmationModal;
