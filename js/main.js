requirejs.config({
  baseUrl: 'js',
  urlArgs: 'bust=' + Date.now(),
  paths: {
    libs: '../libs',
    backbone: '../libs/backbone/backbone',
    underscore: '../libs/underscore/underscore',
    jquery: '../libs/jquery-dist/jquery.min'
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

require(['core/application'], function(Application) {
  var app;
  console.log('main');

  app = new Application();
  app.init();
});
