/*jshint esnext: true */
FlowRouter.route('/', {
  name: 'route.myTasks',
  action: function() {
    BlazeLayout.render('tmplAppBody', { content: 'tmplMyTasks' });
  }
});

FlowRouter.route('/projects', {
  name: 'route.projects',
  action: function() {
    BlazeLayout.render('tmplAppBody', { content: 'tmplProjects' });
  }
});

FlowRouter.route('/tasks', {
  name: 'route.tasks',
  action: function() {
    BlazeLayout.render('tmplAppBody', { content: 'tmplTasks' });
  }
});

FlowRouter.route('/users', {
  name: 'route.users',
  action: function() {
    BlazeLayout.render('tmplAppBody', { content: 'tmplUsers' });
  }
});
