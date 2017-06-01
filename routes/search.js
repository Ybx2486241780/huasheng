var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.locals.loginbean = req.session.loginbean;
  keywords = req.query.keywords;
  kwArr = keywords.split('');
  len = kwArr.length;
  keyword = '';
  if(kwArr[i]!=''){
	keyword += kwArr[i]+'丨';
	}
	var cl 
  //res.render('index', {});
});


module.exports = router;
