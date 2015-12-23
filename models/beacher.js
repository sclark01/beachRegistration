var mongoose = require('mongoose');

module.exports = mongoose.model('Beacher', {
	name: String,
	likes: String,
	skills: String
});