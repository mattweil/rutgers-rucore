const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var rucoreDB = mongoose.createConnection('mongodb://localhost/rucore');

// Create a schema
const classSchema = new Schema({
  courseTitle: {
    type: String,
  },
  courseIndex: {
    type: String,
  },
  credits: {
    type: String,
  },
  coreCodes: [{type: String}],
});

classSchema.pre('save', async function(next) {

  try {
    next();
  } catch(error) {
    next(error);
  }
});

classSchema.pre('find', async function(next) {
  try {
    next();
  } catch(error) {
    next(error);
  }
});



// Create a model
const Class = rucoreDB.model('class', classSchema);

// Export the model
module.exports = Class;
