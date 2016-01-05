import config from '../config';

// This adds fetch and es6-promise as a global
require('es6-promise').polyfill();
require('isomorphic-fetch');

var Dataservice = function (){
  if (!(this instanceof Dataservice)) {
    return new Dataservice();
  }
};

Dataservice.prototype.getRootUrl = function() {
  return window.location.hostname === 'localhost' ? `http://localhost:${config.port}` : '';
};

Dataservice.prototype.setPort = function(newPort) {
  config.port = newPort;
};

Dataservice.prototype.send = function(method, url, data, handleError) {
  const requestSettings = { method: method };
  if (method !== 'GET') {
    requestSettings.body = JSON.stringify(data);
    requestSettings.headers = {
      Accept: 'application/json'
      ,'Content-Type': 'application/json'
    };
  }
  return fetch(this.getRootUrl() + url, requestSettings)
    .catch((error) => {
      if(handleError) {
        handleError(error);
      }
    });
};

Dataservice.prototype.get = function(url, handleError) {
  return this.send('GET', url, {}, handleError);
};

Dataservice.prototype.post = function(url, data, handleError) {
  return this.send('POST', url, data, handleError);
};

Dataservice.prototype.put = function(url, data, handleError) {
  return this.send('PUT', url, data, handleError);
};

Dataservice.prototype.delete = function(url, data, handleError) {
  return this.send('DELETE', url, data, handleError);
};

module.exports = new Dataservice();
