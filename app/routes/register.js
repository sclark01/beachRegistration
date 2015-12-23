var express = require('express');
var router = express.Router();
var Beacher = require('../models/beacher');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BeachMe' });
});

router.post('/', function(req, res, next){
	Beacher.create({
		name: req.body.name,
		likes: req.body.likes,
		skills: req.body.skills
	}, function(err, beacher){
		if(err){
			res.send(err);
		}
		Beacher.find(function(err, beachers){
			if(err){
				res.send(err);
			}
			res.json(beachers);
		});

	});
});

module.exports = router;
