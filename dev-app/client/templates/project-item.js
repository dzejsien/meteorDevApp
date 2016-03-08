Template.tmplProjectItem.events({
  "click #edit": function(event, template) {
    event.preventDefault();
    var id = $(event.target).closest('.project-operations').attr('data-id');
    Session.set('projectId', id);
    Modal.show('tmplProjectForm');
  }
});
