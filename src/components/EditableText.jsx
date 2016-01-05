import BaseComponent from './BaseComponent';
import React from 'react';
import InlineTextEdit from './InlineTextEdit';
import StaticField from './StaticField';

class EditableText extends BaseComponent {
  constructor(props) {
    //model configures what profile fields are being received for proper rendering when editing
    super(props);
    this._bind('onClear', 'onEdit', 'onSave', 'onCancel', 'onValidate');
    this.state = {
      editing: false
      ,highlight: false
    };
  }
  onEdit() {
    if(!this.props.readOnly) {
      this.setState({
        editing: true
        ,highlight: false
      });
    }
  }
  onSave(e) {
    const value = e.value;
    if (this.props.value !== value) {
      this.setState({
        highlight: true
        ,editing: false
        ,isSaving: true
      });
      this.props.onSave(
        {
          name: this.props.name
          ,value: value
        }
      );
    } else {
      this.setState({
        highlight: false
        ,editing: false
      });
    }
  }
  onCancel() {
    this.setState({
      editing: false
      ,highlight: false
    });
  }
  onValidate(value) {
    return this.props.onValidate(this.props.name, value);
  }
  onClear() {
    this.onSave(
      {
        name: this.props.name
        ,value: ''
      }
    );
  }
  render() {
    let content;
    if (this.state.editing) {
      content = (
        <InlineTextEdit
          type={this.props.type}
          label={this.props.label}
          onSave={this.onSave}
          onCancel={this.onCancel}
          value={this.props.value}
          onValidate={this.onValidate}
          multiple={this.props.multiple}
          options={this.props.options}
          />
      );
    } else {
      content = (
        <StaticField
          label={this.props.label}
          onClear={this.onClear}
          onClick={this.props.readOnly ? null : this.onEdit}
          type={this.props.type}
          value={this.props.value}
          linkType={this.props.linkType}
          optLabel={this.props.optLabel}
          isSaving={this.props.isSaving}
          highlight={this.state.highlight}
          readOnly={this.props.readOnly}
          isRequired={this.props.isRequired}
          isLink = {this.props.isLink} />
      );
    }
    return content;
  }
}

EditableText.propTypes = {
  name: React.PropTypes.string
  ,label: React.PropTypes.string
  ,value: React.PropTypes.any
  ,type: React.PropTypes.string
  ,linkType: React.PropTypes.string
  ,onSave: React.PropTypes.func
  ,isSaving: React.PropTypes.bool
  ,readOnly: React.PropTypes.bool
  ,isRequired: React.PropTypes.bool
  ,optLabel: React.PropTypes.string
  ,onValidate: React.PropTypes.func
};
EditableText.defaultProps = {
  value: ''
  ,type: 'text'
  ,isSaving: false
  ,onSave: function() {
    return true;
  }
};

export default EditableText;
