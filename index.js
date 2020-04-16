'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  included() {
    this._super.included.apply(this, arguments);
  }
};
