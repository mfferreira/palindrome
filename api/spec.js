/*
* @Author: Marco Ferreira
* @Date:   2016-12-19 17:45:31
* @Last Modified by:   Marco Ferreira
* @Last Modified time: 2016-12-19 18:56:49
*/

'use strict';

var request = require('supertest'),
	should 	= require('should'),
	utils = require('./utils');


describe('Testing utils.getAlphabeticChars', function() {

	it('should return "aaa"', function(done) {
		console.log('getAlphabeticChars("aaa")')
		var str = utils.getAlphabeticChars("aaa");
		str.should.be.exactly("aaa");
		done();
	})

	it('should return "aabb"', function(done) {
		console.log('getAlphabeticChars("aa11bb")')
		var str = utils.getAlphabeticChars("aabb");
		str.should.be.exactly("aabb");
		done();
	})

	it('should return "z"', function(done) {
		console.log('getAlphabeticChars("1234567890z")')
		var str = utils.getAlphabeticChars("1234567890z");
		str.should.be.exactly("z");
		done();
	})

	it('should return "" (empty string)', function(done) {
		console.log('getAlphabeticChars("123")')
		var str = utils.getAlphabeticChars("123");
		str.should.be.exactly("");
		done();
	})

});

describe('Testing utils.reverseString', function() {

	it('should return "aaa"', function(done) {
		console.log('reverseString("aaa")')
		var str = utils.reverseString("aaa");
		str.should.be.exactly("aaa");
		done();
	})

	it('should return "bbaa"', function(done) {
		console.log('reverseString("aabb")')
		var str = utils.reverseString("aabb");
		str.should.be.exactly("bbaa");
		done();
	})

	it('should return "z0987654321"', function(done) {
		console.log('reverseString("1234567890z")')
		var str = utils.reverseString("1234567890z");
		str.should.be.exactly("z0987654321");
		done();
	})

	it('should return "321"', function(done) {
		console.log('reverseString("123")')
		var str = utils.reverseString("123");
		str.should.be.exactly("321");
		done();
	})

});

describe('Testing API', function () {
  var server;

  beforeEach(function () {
  	// start a clean server instance
    server = require('./server')();
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('Should return "Well, hello there!" 200', function (done) {
    console.log('GET /')
    request(server)
      .get('/')
      .expect(200)
      .expect("Well, hello there!", done);
  });

  it('200 - IS A PALINDROME', function (done) {
    console.log('GET /ana')
    request(server)
      .get('/ana')
      .expect(200)
      .expect("ana", done);
  });

  it('400 - IS NOT A PALINDROME', function (done) {
    console.log('GET /macaco')
    request(server)
      .get('/macaco')
      .expect(400)
      .expect("macaco", done);
  });

  it('200 - IS A PALINDROME', function (done) {
    console.log('GET /a man a plan a canal panama')
    request(server)
      .get('/a man a plan a canal panama')
      .expect(200)
      .expect("a man a plan a canal panama", done);
  });

  it('200 - IS A PALINDROME', function (done) {
    console.log('GET /aa')
    request(server)
      .get('/a man a plan a canal panama')
      .expect(200)
      .expect("a man a plan a canal panama", done);
  });

  it('200 - IS A PALINDROME', function (done) {
    console.log('GET /aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    request(server)
      .get('/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .expect(200)
      .expect("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", done);
  });

  it('200 - IS A PALINDROME', function (done) {
    console.log('GET /aaabb010bbaaa')
    request(server)
      .get('/aaabb010bbaaa')
      .expect(200)
      .expect("aaabb010bbaaa", done);
  });

  it('200 - IS A PALINDROME', function (done) {
    console.log('GET /1234567890')
    request(server)
      .get('/1234567890')
      .expect(200)
      .expect("1234567890", done);
  });

  it('400 - IS NOT A PALINDROME', function (done) {
    console.log('GET /aaabbb')
    request(server)
      .get('/aaabbb')
      .expect(400)
      .expect("aaabbb", done);
  });

  it('400 - IS NOT A PALINDROME', function (done) {
    console.log('GET /qwerty')
    request(server)
      .get('/qwerty')
      .expect(400)
      .expect("qwerty", done);
  });

  it('400 - IS NOT A PALINDROME', function (done) {
    console.log('GET /a1234567890z')
    request(server)
      .get('/a1234567890z')
      .expect(400)
      .expect("a1234567890z", done);
  });

  it('404 everything else', function (done) {
    console.log('test 404 on /foo/bar')
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });

});
