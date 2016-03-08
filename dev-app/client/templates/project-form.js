Template.tmplProjectForm.events({
  "submit": function(event, template) {
    event.preventDefault();

    var formData = Common.getFormObject(event.target);

    console.log(formData);

    var callback = function(error) {
      if (error) {
        template.isError.set(true);
        template.errorMessage.set(error);
      } else {
        template.isError.set(false);
        template.errorMessage.set("");
        Modal.hide('tmplProjectForm');
      }
    };

    if (template.state.get() == "ADD") {
      formData.isActive = true;
      Meteor.call("insertProject", formData, callback);
    } else {
      var projectId = Session.get('projectId');
      var project = Projects.findOne(projectId);
      project.name = formData.name;

      Meteor.call("updateProject", project, callback);
    }
  }
});

Template.tmplProjectForm.helpers({
  project: function() {
    var projectId = Session.get('projectId');

    if (projectId !== null) {
      var project = Projects.findOne(projectId);
      Template.instance().state.set("EDIT");
      return project;
    } else {
      Template.instance().state.set("ADD");
      return {};
    }
  },

  isError: function() {
    return Template.instance().isError.get();
  },

  errorMessage: function() {
    return Template.instance().errorMessage.get();
  }
});

Template.tmplProjectForm.onCreated(function() {
  this.isError = new ReactiveVar(false);
  this.errorMessage = new ReactiveVar("");
  this.state = new ReactiveVar("ADD");
});

Template.tmplProjectForm.onRendered(function() {
  $("#formProject").validate();
});
