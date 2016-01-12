/**
 * A mixin for handling (effectively) onClickOutside for React components.
 * Note that we're not intercepting any events in this approach, and we're
 * not using double events for capturing and discarding in layers or wrappers.
 *
 * The idea is that components define function
 *
 *   handleClickOutside: function() { ... }
 *
 * If no such function is defined, an error will be thrown, as this means
 * either it still needs to be written, or the component should not be using
 * this mixing since it will not exhibit onClickOutside behaviour.
 *
 */
import React from 'react';

(function (root, factory) {
  module.exports = factory();
}(this, function () {

  // Use a parallel array because we can't use
  // objects as keys, they get toString-coerced
  var registeredComponents = [];
  var handlers = [];

  var IGNORE_CLASS = 'ignore-react-onclickoutside';

  return {
    componentDidMount: function() {
      if(!this.handleClickOutside)
        throw new Error("Component lacks a handleClickOutside(event) function for processing outside click events.");

      var fn = this.__outsideClickHandler = (function(localNode, eventHandler) {
        return function(evt) {
          var source = evt.target;
          var found = false;
          // If source=local then this event came from "somewhere"
          // inside and should be ignored. We could handle this with
          // a layered approach, too, but that requires going back to
          // thinking in terms of Dom node nesting, running counter
          // to React's "you shouldn't care about the DOM" philosophy.
          while(source.parentNode) {
            found = (source === localNode || source.classList.contains(IGNORE_CLASS));
            if(found) return;
            source = source.parentNode;
          }
          eventHandler(evt);
        };
      }(React.findDOMNode(this), this.handleClickOutside));

      var pos = registeredComponents.length;
      registeredComponents.push(this);
      handlers[pos] = fn;

      // If there is a truthy disableOnClickOutside property for this
      // component, don't immediately start listening for outside events.
      if (!this.props.disableOnClickOutside) {
        this.enableOnClickOutside();
      }
    }
    ,componentWillUnmount: function() {
      this.disableOnClickOutside();
      this.__outsideClickHandler = false;
      var pos = registeredComponents.indexOf(this);
      if( pos>-1) {
        if (handlers[pos]) {
          // clean up so we don't leak memory
          handlers.splice(pos, 1);
          registeredComponents.splice(pos, 1);
        }
      }
    }
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */
    ,enableOnClickOutside: function() {
      var fn = this.__outsideClickHandler;
      document.addEventListener("mousedown", fn);
      document.addEventListener("touchstart", fn);
    }
    /**
     * Can be called to explicitly disable event listening
     * for clicks and touches outside of this element.
     */
    ,disableOnClickOutside: function() {
      var fn = this.__outsideClickHandler;
      document.removeEventListener("mousedown", fn);
      document.removeEventListener("touchstart", fn);
    }
  };

}));