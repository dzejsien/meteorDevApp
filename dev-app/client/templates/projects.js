Template.tmplProjects.onCreated(function () {
  this.subscribe('projects');
});

Template.tmplProjects.helpers({
  projects: function () {
    return Projects.getAll();
  }
});

Template.tmplProjects.events({
  "click #createProject": function(e){
      e.preventDefault();
      Modal.show('tmplProjectForm');
  }
});
