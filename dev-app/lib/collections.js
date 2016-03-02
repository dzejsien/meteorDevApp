/*jshint esnext: true */
class TasksCollection extends Mongo.Collection {

}

Tasks = new TasksCollection("tasks");
Tasks.attachSchema(Schema.Tasks);

class ProjectsCollection extends Mongo.Collection {

  getAll() {
    return this.find({isActive: true});
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
  insertProject: function(project, callback){
     if (!Meteor.userId()) {
       throw new Meteor.Error("not-auth");
     }

     Projects.insert(project, callback);
  }
});
