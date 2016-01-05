import React from 'react';
import classNames from 'classnames';
import { CollapsibleMixin } from 'react-bootstrap';

const CollapsibleList = React.createClass({
  mixins: [CollapsibleMixin]
  ,propTypes: {
    title: React.PropTypes.string
    ,numItemsToShow: React.PropTypes.number
    ,items: React.PropTypes.array.isRequired
  }
  ,getDefaultProps() {
    return {
      items: []
      ,numItemsToShow: 4
    };
  }

  ,getCollapsibleDOMNode(){
    return React.findDOMNode(this.refs.hiddenItems);
  }

  ,getCollapsibleDimensionValue(){
    return React.findDOMNode(this.refs.hiddenItems).scrollHeight;
  }

  ,onHandleToggle(e){
    e.preventDefault();
    this.setState({expanded:!this.state.expanded});
  }
  ,render () {
    const styles = this.getCollapsibleClassSet();
    let shownItems = this.props.items.slice(); // eslint-disable-line prefer-const
    let hiddenItems = [];
    if(this.props.items.length > this.props.numItemsToShow) {
      hiddenItems = shownItems.splice(this.props.numItemsToShow, shownItems.length);
    }
    const hasHiddenItems = hiddenItems.length > 0;

    return (
      <div>
        <h5>{this.props.title}</h5>
        <ul>
          {shownItems.map((item, index) => {
            return (
              <li className="checkbox" key={index}>
                <label>
                  <input type="checkbox" defaultValue />
                    {item}
                </label>
              </li>
            );
          })}
          { hasHiddenItems &&
          <div ref="hiddenItems"  className={classNames(styles)}>
            {hiddenItems.map((item, index) => {
              return (
                <li className="checkbox" key={index} style={{marginTop: -5}}>
                  <label>
                    <input type="checkbox" defaultValue />
                      {item}
                  </label>
                </li>
              );
            })}
          </div>
        }
        </ul>
        { hasHiddenItems && <a href="#" onClick={this.onHandleToggle}>Show All Locations</a> }
        <hr />
      </div>
    );
  }
});

export default CollapsibleList;
