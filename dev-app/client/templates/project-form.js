Template.tmplProjectForm.events({
  "submit": function(event, template) {
    event.preventDefault();

    var project = Common.getFormObject(event.target);
    project.isActive = true;
    Meteor.call("insertProject", project);
    
    Modal.hide('tmplProjectForm');
  }
});
