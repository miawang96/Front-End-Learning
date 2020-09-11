var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var examPaperSchema = new Schema({
  name: String,
  amount: Number,
  fullMarks: Number,
  type: Number,
  creationTime: Date,
});

module.exports = mongoose.model('ExamPaper', examPaperSchema);
