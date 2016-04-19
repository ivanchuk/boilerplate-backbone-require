define('router', ['backbone', 'pageslider', 'underscore', 'jquery'], function(Backbone, PageSlider, _, $) {
  'use strict';

  var Router = Backbone.Router.extend({
    initialize: function initialize(pushState) {
      console.debug('router:initialize');

      _.templateSettings = {interpolate: /\{\{(.+?)\}\}/g};
      Backbone.history.start({pushState: pushState || false});
    },

    slider: new PageSlider($('#container')),

    go: function go(route) {
      console.debug('application:go', route);
      this.navigate(route, {trigger: true});
    },

    back: function back() {
      console.debug('application:back');
      // TODO
    },

    render: function render(tmpl, context) {
      var template, page;
      console.log('application:render', tmpl, context);

      require(['text!tmpl/' + tmpl + '.html'], function(html) {
        context = typeof context === 'object' ? context : {};
        template = _.template(html);
        page = template(context);
        this.slider.slidePage($(page));
      }.bind(this));
    }
  });

  return Router;
});
