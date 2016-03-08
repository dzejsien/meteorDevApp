Template.tmplUsers.onCreated(function() {
  this.subscribe("users");
});

Template.tmplUsers.helpers({
  users: function() {
    return Meteor.users.find({}, {
      fields: {
        createdAt: 1,
        username: 1
      }
    }).fetch();
  }
});
