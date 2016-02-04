Schema = {};

Schema.Tasks = new SimpleSchema({
  id: { type: String },
  projectId : { type: String },
  name: { type: String },
  createdAt: { type: Date },
  creator: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
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
});

Schema.Projects = new SimpleSchema({
  id: { type: String },
  name: { type: String },
  creator: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  }
});
