define('routes', {
  routes: {
    '':           'indexAction',
    '*not-found': 'notFoundAction'
  },

  indexAction: function indexAction() {
    console.debug('routes:indexAction');
  },

  notFoundAction: function notFoundAction() {
    console.debug('routes:notFoundAction');
  }
});
