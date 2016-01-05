import React from 'react';
import BaseComponent from './BaseComponent';
import {Button} from 'react-bootstrap/lib';
import InputListItem from './InputListItem';
import _ from 'lodash';

class InputList extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('renderAddAction', 'handleAdd');
  }

  handleAdd(event) {
    this.props.onAdd({
      relatedEvent: event
    });
  }

  renderAddAction() {
    if(this.props.onAdd && this.props.source.length < this.props.limit) {
      return (
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <Button type="button" bsStyle="link" onClick={this.handleAdd}>{this.props.labelAddAction}</Button>
          </div>
        </div>
      );
    }
    return '';
  }

  render () {
    return (
      <div>
        {this.props.source.map((item, index) => {
          return (
            <InputListItem
              key={_.uniqueId()} // key should be unique in his context and can't change either
              itemIndex={index}
              itemValue={item}
              prefix={this.props.prefix}
              inputLabel={this.props.inputLabel}
              type={this.props.inputType}
              onItemChange={this.props.onItemChange}
              onRemove={this.props.onRemove} />
          );
        })}
        {this.renderAddAction()}
      </div>
    );
  }
}

InputList.propTypes = {
  prefix: React.PropTypes.string
  ,inputLabel: React.PropTypes.string
  ,labelAddAction: React.PropTypes.string
  ,source: React.PropTypes.array
  ,limit: React.PropTypes.number
  ,inputType: React.PropTypes.string
  ,onItemChange: React.PropTypes.func
  ,onRemove: React.PropTypes.func
  ,onAdd: React.PropTypes.func
};

InputList.defaultProps = {
  prefix: 'item'
  ,labelAddAction: '+ Add Item'
  ,limit: 5
  ,inputType: 'text'
  ,source: []
};

export default InputList;