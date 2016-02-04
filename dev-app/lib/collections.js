class TasksCollection extends Mongo.Collection {

}

Tasks = new TasksCollection("tasks");
Tasks.attachSchema(Schema.Tasks);

class ProjectsCollection extends Mongo.Collection {

}

Projects = new ProjectsCollection("projects"); 
Projects.attachSchema(Schema.Projects);
