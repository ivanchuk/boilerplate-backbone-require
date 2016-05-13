require.config({
  baseUrl: 'js',
  urlArgs: 'bust=' + Date.now(),
  paths: {
    backbone: 'backbone-min',
    underscore: 'underscore-min',
    jquery: 'jquery.min',
    tmpl: '../assets/html'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    pageslider: {
      exports: 'PageSlider'
    }
  }
});

require(['application'], function(Application) {
  console.debug('main', 'application starts');
  new Application();

  // NOTE use only in development development
//  window.app = new Application();
});
