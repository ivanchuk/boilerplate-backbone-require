define('page', ['backbone', 'underscore'], function(Backbone, _) {
  'use strict';

  var CONTAINER_SELECTOR = '#container';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  var PageView = Backbone.View.extend({
    el: CONTAINER_SELECTOR,
    template: _.template("Hello {{ name }}!"),

    render: function render() {
      console.debug('pageView:render');
      this.$el.html(this.template(this.model.attributes));
    }
  });

  return PageView;
});
