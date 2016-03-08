Template.tmplTasks.onCreated(function() {
  this.subscribe('tasks');
});

Template.tmplTasks.helpers({
  tasks: function() {
    return Tasks.getAll();
  }
});

Template.tmplTasks.events({
  "click #createTask": function(e) {
    e.preventDefault();
    Session.set("taskId", null);
    Modal.show('tmplTaskForm');
  }
});
