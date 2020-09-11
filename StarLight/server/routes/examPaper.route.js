var express = require('express');
var router = express.Router();

var ExamPapers = require('../models/examPaper.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  ExamPapers.find({}, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          data: doc,
        },
      });
    }
  });
});

module.exports = router;
