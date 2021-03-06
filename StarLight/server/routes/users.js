var express = require('express');
var router = express.Router();

var Users = require('../models/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.find({}, (err, doc) => {
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
