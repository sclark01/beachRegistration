var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BeachMe' });
});

router.post('/', function(req, res, next){
	response = {
		name: req.body.name,
		likes: req.body.likes,
		skills: req.body.skills
	};
  	res.render('success', response);
});

module.exports = router;
