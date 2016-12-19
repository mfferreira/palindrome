/*
* @Author: Marco Ferreira
* @Date:   2016-12-19 17:47:50
* @Last Modified by:   Marco Ferreira
* @Last Modified time: 2016-12-19 18:20:13
*/

'use strict';

var express = require('express'),
	_ = require('lodash');

function startService() {
	// cache
	var app = express();

	// CORS middleware
	var allowCrossDomain = function(req, res, next) {
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    next();
	}
	app.use(allowCrossDomain);

	app.get('/', function(req, res) {
		res.send("Well, hello there!");
	})

	app.get('/:palindrome', function(req, res) {
		// console.log(JSON.stringify(req.params));

		var str = req.params.palindrome.replace(/[^a-zA-Z]*/ig, '');
		var strReversed = _.reverse(str.split('')).join('');

		if (str === strReversed)
			res.status(200).send(req.params.palindrome)
		else
			res.status(400).send(req.params.palindrome)

	});

	var server = app.listen(3000, function () {
		var port = server.address().port;
		console.log('API listening on http://localhost:%s', port);
	});

	return server;
}

module.exports = startService;