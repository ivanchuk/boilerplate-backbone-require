define('router', ['backbone'], function(Backbone) {
  'use strict';

  var Router = Backbone.Router.extend({
    initialize: function initialize(pushState) {
      console.debug('router:initialize');
      Backbone.history.start({pushState: pushState || false});
    },

    go: function go(route) {
      console.debug('application:go', route);
      this.navigate(route, {trigger: true});
    },

    back: function back() {
      console.debug('application:back');
      // TODO
    }
  });

  return Router;
});
