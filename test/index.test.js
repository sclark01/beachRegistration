var request = require('supertest'),
	express = require('express'),
	assert = require('assert');

var app = require('../app');

describe('Index Page Tests', function(){
	it("renders successfully", function(done){
		request(app)
			.get('/')
			.expect(200, done);
	});
	it("correctly posts a new beacher", function(done){
		var user = {
			name: "User1",
			likes: "like1, like2",
			skills: "skill1, skill2"
		};
		request(app)
			.post("/")
			.send(user)
			.expect(200, done)
	});
});
