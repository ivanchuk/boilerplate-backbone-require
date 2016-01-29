define(['backbone'], function(Backbone) {

  var Application = Backbone.Router.extend({
    initialize: function initialize(routes) {
      console.log('Application:initialize', routes);
    },

    init: function init() {
      console.log('Application:init');
      Backbone.history.start({pushState: true});
    }
  });

  return Application;

});
