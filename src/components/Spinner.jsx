var React = require('react');

var Spinner = React.createClass({

  render: function() {
    return (
      <div {...this.props} className={"spinner spinner-wave"}>
        <div className="spinner-rect1"></div>
        <div className="spinner-rect2"></div>
        <div className="spinner-rect3"></div>
        <div className="spinner-rect4"></div>
        <div className="spinner-rect5"></div>
      </div>
    );
  }

});

module.exports = Spinner;
