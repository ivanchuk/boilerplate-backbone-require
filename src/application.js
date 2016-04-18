define('application', ['router', 'page', 'backbone'], function(Router, PageView, Backbone) {

  var Application = Router.extend({
    routes: {
      '':           'homeAction',
      '*not-found': 'notFoundAction'
    },

    homeAction: function homeAction() {
      console.log('application:homeAction');
      this.render('view', {name: 'Ivan'});
    },

    notFoundAction: function notFoundAction() {
      console.log('application:notFoundAction');
    },

    render: function render(view, context) {
      var page, model;
      console.log('application:render', view, context);

      model = new Backbone.Model(context);
      page = new PageView({model: model});
      page.render();
    }
  });

  return Application;
});
