var express = require('express');
var router = express.Router();
var url = require('url')
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = JSON.parse(fs.readFileSync('./routes/schools.json', 'utf8'));
  console.log(obj)
  res.render('index', { title: 'Main', schools: obj });
});

router.get('/study/*', function(req, res, next) {
  path = req.originalUrl
  pageName = path.substr(1, path.length -1)+'.ejs'
  console.log(path.substr(1, path.length -1)+'.ejs')

  res.render(pageName, { title: 'study' });
});

router.get('/visa/*', function(req, res, next) {
  path = req.originalUrl
  pageName = path.substr(1, path.length -1)+'.ejs'
  console.log(path.substr(1, path.length -1)+'.ejs')

  res.render(pageName, { title: 'visa' });
});

router.get('/immigration/*', function(req, res, next) {
  path = req.originalUrl
  pageName = path.substr(1, path.length -1)+'.ejs'
  console.log(path.substr(1, path.length -1)+'.ejs')

  res.render(pageName, { title: 'immigration' });
});

router.get('/course/*', function(req, res, next) {
  path = req.originalUrl
  pageName = path.substr(1, path.length -1)+'.ejs'
  console.log(path.substr(1, path.length -1)+'.ejs')

  res.render(pageName, { title: 'course' });
});

module.exports = router;
