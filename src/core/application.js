define('application', ['backbone', 'routes'], function(Backbone, routes) {

  var Application;

  Backbone.history.start({pushState: true});
  Application = Backbone.Router.extend(routes);

  return Application.extend({
    go: function go(route) {
      console.debug('application:go', route);
      this.navigate(route, {trigger: true});
    }
  });

});
