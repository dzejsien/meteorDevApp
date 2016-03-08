Template.tmplMyTasks.onCreated(function () {
  this.subscribe("userTasks");
});

Template.tmplMyTasks.helpers({
  tasks: function () {
      return Tasks.getAll();
  }
});
