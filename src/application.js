define('application', ['router'], function(Router) {

  var _data = [
    {image: 'buildbot.jpg', name: 'Build Bot', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {image: 'medibot.jpg', name: 'Medi Bot', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {image: 'ripplebot.jpg', name: 'Ripple Bot', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
  ];

  var Application = Router.extend({
    routes: {
      '':           'homeAction',
      'detail/:id': 'detailAction',
      '*not-found': 'notFoundAction'
    },

    homeAction: function homeAction() {
      console.log('application:homeAction');
      this.render('home');
    },

    detailAction: function detailAction(id) {
      console.log('application:detailAction', id);

      this.render('detail', _data[id]);
    },

    notFoundAction: function notFoundAction() {
      console.log('application:notFoundAction');
    }
  });

  return Application;
});
