Schema = {};

Schema.Tasks = new SimpleSchema({
  projectId: {
    type: String
  },
  projectName: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  username: {
    type: String,
    optional: true
  },
  isDone: {
    type: Boolean
  }
});

Schema.Projects = new SimpleSchema({
  name: {
    type: String
  },
  isActive: {
    type: Boolean,
    optional: true
  },
  creator: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  }
});
