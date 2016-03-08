Template.tmplTaskForm.events({
  "submit": function(event, template) {
    event.preventDefault();
    var formData = Common.getFormObject(event.target);
    formData.isDone = event.target.isDone.checked;

    var callback = function(error) {
      if (error) {
        template.isError.set(true);
        template.errorMessage.set(error);
      } else {
        template.isError.set(false);
        template.errorMessage.set("");
        Modal.hide('tmplTaskForm');
      }
    };

    if (template.state.get() == "ADD") {
      Meteor.call("insertTask", formData, callback);
    } else {
      var taskId = Session.get('taskId');
      var task = Tasks.findOne(taskId);
      task.name = formData.name;
      task.description = formData.description;
      task.projectId = formData.projectId;
      task.owner = formData.owner;
      task.isDone = formData.isDone;

      Meteor.call("updateTask", task, callback);
    }
  }
});

Template.tmplTaskForm.helpers({
  task: function() {
    var taskId = Session.get('taskId');

    if (taskId !== null) {
      var task = Tasks.findOne(taskId);
      Template.instance().state.set("EDIT");
      return task;
    } else {
      Template.instance().state.set("ADD");
      return {};
    }
  },

  projectsOptions: function() {
    return Projects.getAll();
  },

  isSelected: function(firstId, secondId) {
    if (firstId === secondId) {
      return "selected";
    }

    return "";
  },

  isDone: function(isDone) {
    if (isDone) {
      return "checked";
    }

    return "";
  },

  userOptions: function() {
    return Meteor.users.find();
  },

  isError: function() {
    return Template.instance().isError.get();
  },

  errorMessage: function() {
    return Template.instance().errorMessage.get();
  }
});

Template.tmplTaskForm.onCreated(function() {
  this.isError = new ReactiveVar(false);
  this.errorMessage = new ReactiveVar("");
  this.state = new ReactiveVar("ADD");

  this.subscribe('projects');
  this.subscribe("users");
});

Template.tmplTaskForm.onRendered(function() {
  $("#formTask").validate();
});
