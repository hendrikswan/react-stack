import React from 'react';
import BaseComponent from './BaseComponent';
import {Input, Button} from 'react-bootstrap';
import reactMixin from 'react-mixin';
import clickOutside from './../mixins/clickOutside';

class InlineTextEdit extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind(
      'handleClickOutside'
      ,'renderOptions'
      ,'componentDidMount'
      ,'handleChange'
      ,'onAccept'
      ,'onCancel'
      ,'handleKeys'
    );
    this.state = {
      value: this.props.value
      ,validationState: null
      ,valid: true
      ,help: ''
      ,check: false
    };
  }
  handleClickOutside(event){
    event.preventDefault();
    this.onCancel();
  }
  handleChange(event) {
    const validate = this.props.onValidate(event.target.value);
    const validationState = validate.validationState || null;
    const help = validate.help || null;
    const valid = validate.valid || true; // no validation defaults to true
    this.setState({
      value: event.target.value
      ,validationState: validationState
      ,valid: valid
      ,help: help
    });
  }
  onCancel() {
    if(this.state.check === false) {
      this.props.onCancel(
        {
          value: this.state.value
        });
    }
  }
  onAccept(event) {
    if(event.target.tagName === 'I') {
      this.setState({check: true});
    }
    if(this.state.valid) {
      this.props.onSave(
        {
          value: this.state.value
        });
    }
    event.preventDefault();
  }
  handleKeys(event) {
    const ENTER = 13;
    const ESCAPE = 27;
    if( event.keyCode === ENTER) {
      this.onAccept(event);
    } else if(event.keyCode === ESCAPE) {
      this.onCancel(event);
    }
  }
  renderOptions() {
    var options = [];
    if(this.props.options) {
      for (var option of Object.keys(this.props.options)) {
        options.push(<option key={option} value={option}>{this.props.options[option]}</option>);
      }
      return options;
    }
  }
  render() {
    const options = this.renderOptions();
    const buttons = (
      <span className="input-group-btn">
        <Button
          bsSize ="small"
          bsStyle="primary"
          onClick={this.onAccept}
          type="submit"><i className="glyphicon glyphicon-ok"></i>
        </Button>
        <Button
          bsSize ="small"
          bsStyle ="default"
          onClick={this.onCancel}
          type="button"><i className="glyphicon glyphicon-remove"></i>
        </Button>
      </span>
    );
    return (
        <Input
          autoFocus={true}
          buttonAfter={buttons}
          className="input-sm"
          labelClassName="col-sm-2"
          label={this.props.label}
          onChange={this.handleChange}
          onKeyDown={this.handleKeys}
          type={this.props.type}
          value={this.state.value}
          wrapperClassName="col-sm-8"
          help={this.state.help}
          bsStyle={this.state.validationState}>
          {options}
        </Input>
    );
  }
}
//receives a function to handle data changed / cancelled action events.
InlineTextEdit.propTypes = {
  onSave: React.PropTypes.func
  ,onCancel: React.PropTypes.func
  ,value: React.PropTypes.any
  ,label: React.PropTypes.string
  ,onValidate: React.PropTypes.func
  ,options: React.PropTypes.array
  ,type: React.PropTypes.string
};

reactMixin.onClass(InlineTextEdit, clickOutside);

export default InlineTextEdit;

