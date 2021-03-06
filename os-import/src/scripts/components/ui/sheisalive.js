// http://www.youtube.com/watch?v=OiBtx18jc4Q
require('backbone-base');
var _ = require('lodash');
var backbone = require('backbone');
var CreateDpView = require('./create-dp');

module.exports = backbone.BaseView.extend({
  activateOverlay: function(state) {
    this.$('#modal-overlay').prop('hidden', !(_.isUndefined(state) || state));
    return this;
  },

  events: {
    /* eslint-disable lines-around-comment*/
    // Share the click between all views
    /* eslint-enable lines-around-comment*/
    'click': function(event) { this.trigger('click', event.target); }
  },

  render: function() {
    this.layout.createDp = new CreateDpView();
    return this;
  }
});
