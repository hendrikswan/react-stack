var React = require('react');
var BaseComponent = require('common/BaseComponent');

class ExampleComponent extends BaseComponent {
  constructor(props) {
    super(props);

    this._bind('formatName');
    this.state = {
      name: props.name
    };
    this.state = {name: this.formatName()};
  }
  formatName() {
    const name = this.props.name;
    return  name
      .replace(/^./, function(str){ return str.toUpperCase(); });
  }
  render() {
    return (
      <p className="example">Welcome to React {this.state.name}!</p>
    );
  }
}

ExampleComponent.propTypes = {
  name: React.PropTypes.string
};
ExampleComponent.defaultProps = {
  name: 'Headspringer'
};

module.exports = ExampleComponent;
