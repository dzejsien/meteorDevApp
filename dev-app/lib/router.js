/*jshint esnext: true */
FlowRouter.route('/', {
  name: 'route.myTasks',
  action: function() {
    BlazeLayout.render('tmplAppBody', {
      header: 'header',
      content: 'tmplMyTasks',
      login: 'tmplLogin'
    });
  }
});

FlowRouter.route('/projects', {
  name: 'route.projects',
  action: function() {
    BlazeLayout.render('tmplAppBody', {
      header: 'header',
      content: 'tmplProjects',
      login: 'tmplLogin'
    });
  }
});

FlowRouter.route('/tasks', {
  name: 'route.tasks',
  action: function() {
    BlazeLayout.render('tmplAppBody', {
      header: 'header',
      content: 'tmplTasks',
      login: 'tmplLogin'
    });
  }
});

FlowRouter.route('/users', {
  name: 'route.users',
  action: function() {
    BlazeLayout.render('tmplAppBody', {
      header: 'header',
      content: 'tmplUsers',
      login: 'tmplLogin'
    });
  }
});
