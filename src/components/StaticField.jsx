import BaseComponent from './BaseComponent';
import React from 'react';
import {FormControls, Glyphicon} from 'react-bootstrap';

class StaticField extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind(
      'onClick'
      ,'renderTrashCan'
      ,'renderInnerContent'
      ,'renderPencil'
      ,'onMouseEnter'
      ,'onMouseLeave'
      ,'handleOptClick');
    this.state = {
      hover: false
    };
  }
  onMouseEnter() {
    this.setState({
      hover: true
    });
  }
  onMouseLeave() {
    this.setState({
      hover: false
    });
  }
  handleOptClick(event) {
    event.stopPropagation();
    if(event.target.dataset.clear) {
      this.props.onClear();
    } else {
      this.props.onClick();
    }
  }
  renderPencil(onClick) {
    let pencil;
    if(
      (this.state.hover && !this.props.readOnly) &&
      (this.props.value !== '' || this.props.isRequired === true)
    ) {
      pencil = (
        <Glyphicon onClick={onClick} className="form-icon editable-icon" glyph="pencil"/>
      );
    } else {
      pencil = <i className="glyphicon form-icon">&nbsp;</i>; //blank glyphicon for keeping line height
    }
    return pencil;
  }
  renderInnerContent(commonProps, classNames, onClick) {
    if(this.props.isSaving) {
      return <Glyphicon className="gly-spin" glyph="cog" />;
    } else if (!this.props.isRequired && !this.props.readOnly && !this.props.value) {
      commonProps.label = ' ';
      return <a onClick={onClick}>{this.props.optLabel}</a>;
    } else if (this.props.isLink === true) {
      return <a href={`${this.props.linkType}://${this.props.value}`}>{this.props.value}</a>;
    } else {
      return <span className={classNames.concat(['content']).join(' ')}>{this.props.value}</span>;
    }
  }
  renderTrashCan() {
    return (!this.props.isRequired && this.props.value !== '') ? (
      <Glyphicon data-clear className="form-icon" glyph="trash" />
    ) : (
      <i></i>
    );
  }
  onClick() {
    if(this.props.isSaving) {
      return null;
    } else if (!this.props.isRequired && !this.props.isLink) {
      return this.handleOptClick;
    } else if (!this.props.isLink) {
      return this.props.onClick;
    } else {
      return null;
    }
  }
  render() {
    const onClick = this.props.readOnly ? null : this.onClick();
    const pencil = this.renderPencil(this.props.onClick);
    const trashCan = this.renderTrashCan();
    const highlight = this.props.highlight === true ? 'highlight' : '';
    const hoverClassNames = this.props.readOnly ? [''] : ['editablefield'];
    var commonProps = {
      label: this.props.label
      ,labelClassName: 'col-sm-2'
      ,className: 'col-sm-10' + ' ' + highlight
      ,onMouseEnter: this.onMouseEnter
      ,onMouseLeave: this.onMouseLeave
    };
    const innerContent=this.renderInnerContent(commonProps, hoverClassNames, onClick);
    return (
      <FormControls.Static {...commonProps}
        onClick={onClick}>
        {innerContent}
        {trashCan}
        {pencil}
      </FormControls.Static>
    );
  }
}

StaticField.propTypes = {
  label: React.PropTypes.string
  ,value: React.PropTypes.any
  ,type: React.PropTypes.string
  ,linkType: React.PropTypes.string
  ,optLabel: React.PropTypes.string
  ,onClick: React.PropTypes.func
  ,isSaving: React.PropTypes.bool
  ,highlight: React.PropTypes.bool
  ,readOnly: React.PropTypes.bool
  ,isRequired: React.PropTypes.bool
  ,isLink: React.PropTypes.bool
  ,onClear: React.PropTypes.func
};

StaticField.defaultProps = {
  value: ''
  ,type: 'text'
  ,isRequired: true
  ,label:' '
  ,isLink: false
  ,linkType: 'http'
  ,optLabel: '+ Add'
  ,isSaving: false
  ,highlight: false
  ,readOnly: false
};

export default StaticField;
