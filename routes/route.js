var express = require('express');

var router = express.Router();

// Ping to keep Heroku dyno up
router.get('/ping', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Loaded Successfully');
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
/* GET feeds page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});
module.exports = router;