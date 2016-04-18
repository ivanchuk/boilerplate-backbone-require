require.config({
  baseUrl: 'js',
  urlArgs: 'bust=' + Date.now(),
  paths: {
    backbone: 'backbone-min',
    underscore: 'underscore-min',
    jquery: 'jquery.min'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  }
});

require(['application'], function(Application) {
  console.debug('main', 'application starts');

  var app = new Application();
//  app.go('home');
});
