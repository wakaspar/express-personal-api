var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParkSchema = new Schema ({
  name: String,
  location: String,
  hasVisited: Boolean,
  dateVisited: String,
  imgUrl: String
});

var Park = mongoose.model('Park', ParkSchema);

module.exports = Park;
