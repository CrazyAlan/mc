var express = require('express');
var router = express.Router();
var url = require('url')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/study/sfu', function(req, res, next) {
  path = req.originalUrl
  console.log(path.substr(1, path.length -1)+'.ejs')
  res.render('study/sfu.ejs', { title: 'sfu' });
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


module.exports = router;
