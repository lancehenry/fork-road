// Install in dev environment:
// $ npm install --save-dev mocha chai supertest superagent

// Include in json package:
// "test": "node_modules/mocha/bin/mocha ./tests"

var expect = require("chai").expect;
var app = require('../server.js');
var request = require('supertest');

//set up data needed to pass to login method
const userCredentials = {
    userName: "spongebob",
    password: "garyTheSnail"
}

//login user before running any tests
var authenticatedUser = request.agent(app);

before(function (done) {
    authenticatedUser
        .post('/login')
        .send(userCredentials)
        .end(function (err, response) {
            expect(response.statusCode).to.equal(200);
            expect('Location', '/home');
            done();
        });
});
//this test says: make a POST to the /login route with the userName/pw
//after the POST has completed, make sure the status code is 200 
//also make sure that the user has been directed to the /home page

describe('GET /profile', function (done) {

    //if user is logged in, receive 200 status code
    it('should return a 200 response if the user is logged in',
        function (done) {
            authenticatedUser.get('/profile')
                .expect(200, done);
        });
    //if user is not logged in, receive a 302 response and redirect to the login page
    it('should return a 302 response and redirect to /login',
        function (done) {
            request(app).get('/profile')
                .expect('Location', '/login')
                .expect(302, done);
        });
});

