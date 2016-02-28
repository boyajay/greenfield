var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  eventList: {
    type: Array,
  },
  lastModified: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('events', EventSchema);
