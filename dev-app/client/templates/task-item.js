Template.tmplTaskItem.events({
  "click #edit": function(event, template) {
    event.preventDefault();
    var id = $(event.target).closest('.task-operations').attr('data-id');
    Session.set('taskId', id);
    Modal.show('tmplTaskForm');
  },

  "click #done": function(event, template) {
    event.preventDefault();
    var id = $(event.target).closest('.task-operations').attr('data-id');
    Meteor.call("doneTask", id);
  }
});
