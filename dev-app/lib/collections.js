/*jshint esnext: true */
class TasksCollection extends Mongo.Collection {

  getAll(userId) {
    if (userId === undefined) {
      userId = null;
    }
    if (userId === null) {
      return this.find({}, {
        sort: {
          isDone: 1
        }
      });
    } else {
      return this.find({
        owner: userId,
        isDone: false
      });
    }
  }

  insert(task, callback) {
    if (task === null) {
      throw new Meteor.Error("Task is null");
    }
    return super(task, callback);
  }
}

Tasks = new TasksCollection("tasks");
Tasks.attachSchema(Schema.Tasks);
Meteor.methods({
  insertTask: function(task, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-auth");
    }
    task.createdAt = new Date();

    var project = Projects.findOne(task.projectId);
    if (project === null) {
      throw new Meteor.Error("Selected project doesn't exist");
    }

    task.projectName = project.name;

    var user = Meteor.users.findOne(task.owner);
    if (user === null) {
      throw new Meteor.Error("Selected user doesn't exist");
    }

    task.username = user.username;
    task.isDone = false;

    Tasks.insert(task, callback);
  },

  updateTask: function(task, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-auth");
    }

    var project = Projects.findOne(task.projectId);
    if (project === null) {
      throw new Meteor.Error("Selected project doesn't exist");
    }

    task.projectName = project.name;

    var user = Meteor.users.findOne(task.owner);
    if (user === null) {
      throw new Meteor.Error("Selected user doesn't exist");
    }

    task.username = user.username;

    Tasks.update(task._id, {
      $set: {
        projectName: project.name,
        projectId: task.projectId,
        description: task.description,
        name: task.name,
        owner: task.owner,
        username: user.username,
        isDone: task.isDone
      }
    }, callback);
  },

  doneTask: function(taskId, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-auth");
    }

    Tasks.update(taskId, {
      $set: {
        isDone: true
      }
    }, callback);
  }
});

class ProjectsCollection extends Mongo.Collection {

  getAll() {
    return this.find({
      isActive: true
    });
  }

  insert(project, callback) {
    if (project === null) {
      throw new Meteor.Error("Project is null");
    }

    return super(project, callback);
  }
}

Projects = new ProjectsCollection("projects");
Projects.attachSchema(Schema.Projects);
Meteor.methods({
  insertProject: function(project, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-auth");
    }

    Projects.insert(project, callback);
  },

  updateProject: function(project, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-auth");
    }

    Projects.update(project._id, {
      $set: {
        name: project.name
      }
    }, callback);
  }
});
