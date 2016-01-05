import React from 'react';
import BaseComponent from './BaseComponent';
import {Button, Glyphicon, Input} from 'react-bootstrap';

class InputListItem extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('handleRemove', 'handleChange');
    this.state = {
      itemValue: props.itemValue
    };
  }

  handleChange(event) {
    this.setState({ itemValue: event.target.value });
    this.props.onItemChange({
      index: this.props.itemIndex
      ,oldValue: this.props.itemValue
      ,newValue: event.target.value
      ,relatedEvent: event
    });
  }

  handleRemove(event) {
    this.props.onRemove({
      index: this.props.itemIndex
      ,relatedEvent: event
    });
  }

  render () {
    const inputNo = this.props.itemIndex + 1;
    const inputId = this.props.prefix + inputNo;
    const removeBtn = this.props.onRemove &&
      <Button type="button" onClick={this.handleRemove}>
        <Glyphicon glyph="trash" />
      </Button>;

    return (
      <Input
        labelClassName="col-sm-3"
        wrapperClassName="col-sm-9"
        name={inputId}
        value={this.state.itemValue}
        onChange={this.handleChange}
        label={this.props.inputLabel + ' ' + inputNo}
        type={this.props.type}
        buttonAfter={removeBtn} />
    );
  }
}

InputListItem.propTypes = {
  itemIndex: React.PropTypes.number.isRequired
  ,itemValue: React.PropTypes.any.isRequired
  ,prefix: React.PropTypes.string
  ,inputLabel: React.PropTypes.string
  ,type: React.PropTypes.string
  ,onItemChange: React.PropTypes.func
  ,onRemove: React.PropTypes.func
};

InputListItem.defaultProps = {
  prefix: 'item'
  ,inputLabel: 'Item'
  ,type: 'text'
};

export default InputListItem;