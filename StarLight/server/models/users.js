var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "userId": String,
  "userName": String,
  "password": String,
  "profilePhoto": String
});

module.exports = mongoose.model('User', userSchema);