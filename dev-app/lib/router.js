/*jshint esnext: true */
FlowRouter.route('/', {
  name: 'route.myTasks',
  action: function() {
    BlazeLayout.render('tmplAppBody', { header:'header', content: 'tmplMyTasks' });
  }
});

FlowRouter.route('/projects', {
  name: 'route.projects',
  action: function() {
    BlazeLayout.render('tmplAppBody', {  header:'header',content: 'tmplProjects' });
  }
});

FlowRouter.route('/tasks', {
  name: 'route.tasks',
  action: function() {
    BlazeLayout.render('tmplAppBody', {  header:'header',content: 'tmplTasks' });
  }
});

FlowRouter.route('/users', {
  name: 'route.users',
  action: function() {
    BlazeLayout.render('tmplAppBody', {  header:'header',content: 'tmplUsers' });
  }
});
