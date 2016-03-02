if (Meteor.isServer) {
  Meteor.startup(function() {

    if (Projects.getAll().count() === 0) {
      var data = [{
        name: "First super project",
        isActive: true
      }, {
        name: "Second mega project",
        isActive: false
      }, {
        name: "Third lame project",
        isActive: true
      }];

      _.each(data, function(project) {
        var listId = Projects.insert(project);
      });
    }
  });
}
