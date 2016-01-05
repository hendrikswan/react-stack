'use strict';
var StringUtils = function (){
  if (!(this instanceof StringUtils)) {
    return new StringUtils();
  }
};

StringUtils.prototype.textContains = function (text, searchText) {
  return !(text.toLowerCase().indexOf(searchText.toLowerCase()) === -1);
};

StringUtils.prototype.prettyifyCamelCase = function (text) {
  return text
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); });
};
module.exports = new StringUtils();
