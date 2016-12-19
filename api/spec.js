/*
* @Author: Marco Ferreira
* @Date:   2016-12-19 17:45:31
* @Last Modified by:   Marco Ferreira
* @Last Modified time: 2016-12-19 18:30:25
*/

'use strict';

var request = require('supertest');

describe('loading express', function () {
  var server;

  beforeEach(function () {
  	// start a clean server instance
    server = require('./server')();
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('Should return "Well, hello there!" 200', function testSlash(done) {
    console.log('GET /')
    request(server)
      .get('/')
      .expect(200)
      .expect("Well, hello there!", done);
  });

  it('200 - IS A PALINDROME', function testSlash(done) {
    console.log('GET /ana')
    request(server)
      .get('/ana')
      .expect(200)
      .expect("ana", done);
  });

  it('400 - IS NOT A PALINDROME', function testSlash(done) {
    console.log('GET /macaco')
    request(server)
      .get('/macaco')
      .expect(400)
      .expect("macaco", done);
  });

  it('200 - IS A PALINDROME', function testSlash(done) {
    console.log('GET /a man a plan a canal panama')
    request(server)
      .get('/a man a plan a canal panama')
      .expect(200)
      .expect("a man a plan a canal panama", done);
  });

  it('200 - IS A PALINDROME', function testSlash(done) {
    console.log('GET /aa')
    request(server)
      .get('/a man a plan a canal panama')
      .expect(200)
      .expect("a man a plan a canal panama", done);
  });

  it('200 - IS A PALINDROME', function testSlash(done) {
    console.log('GET /aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    request(server)
      .get('/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      .expect(200)
      .expect("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", done);
  });

  it('200 - IS A PALINDROME', function testSlash(done) {
    console.log('GET /aaabb010bbaaa')
    request(server)
      .get('/aaabb010bbaaa')
      .expect(200)
      .expect("aaabb010bbaaa", done);
  });

  it('200 - IS A PALINDROME', function testSlash(done) {
    console.log('GET /1234567890')
    request(server)
      .get('/1234567890')
      .expect(200)
      .expect("1234567890", done);
  });

  it('400 - IS NOT A PALINDROME', function testSlash(done) {
    console.log('GET /aaabbb')
    request(server)
      .get('/aaabbb')
      .expect(400)
      .expect("aaabbb", done);
  });

  it('400 - IS NOT A PALINDROME', function testSlash(done) {
    console.log('GET /qwerty')
    request(server)
      .get('/qwerty')
      .expect(400)
      .expect("qwerty", done);
  });

  it('400 - IS NOT A PALINDROME', function testSlash(done) {
    console.log('GET /a1234567890z')
    request(server)
      .get('/a1234567890z')
      .expect(400)
      .expect("a1234567890z", done);
  });

  it('404 everything else', function testPath(done) {
    console.log('test 404 on /foo/bar')
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });

});
