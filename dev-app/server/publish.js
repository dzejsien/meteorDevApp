if (Meteor.isServer) {

  Meteor.publish("projects", function() {
    if (!this.userId) {
      return this.ready();
    }
    return Projects.getAll();
  });
}
