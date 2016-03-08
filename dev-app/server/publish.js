if (Meteor.isServer) {

  Meteor.publish("projects", function() {
    if (!this.userId) {
      return this.ready();
    }
    return Projects.getAll();
  });

  Meteor.publish("tasks", function() {
    if (!this.userId) {
      return this.ready();
    }
    return Tasks.getAll();
  });

  Meteor.publish("userTasks", function() {
    if (!this.userId) {
      return this.ready();
    }
    return Tasks.getAll(this.userId);
  });

  Meteor.publish("users", function() {
    return Meteor.users.find({});
  });
}
