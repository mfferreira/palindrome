/*
* @Author: Marco Ferreira
* @Date:   2016-12-19 17:47:50
* @Last Modified by:   Marco Ferreira
* @Last Modified time: 2016-12-19 18:36:42
*/

'use strict';

var express = require('express'),
	utils 	= require('./utils');

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

		var str = utils.getAlphabeticChars(req.params.palindrome);
		var strReversed = utils.reverseString(str);

		if (str === strReversed) {
			// console.log(200, JSON.stringify(req.params));
			res.status(200).send(req.params.palindrome);
		}
		else {
			// console.log(200, JSON.stringify(req.params));
			res.status(400).send(req.params.palindrome);
		}

	});

	var server = app.listen(3000, function () {
		var port = server.address().port;
		console.log('API listening on http://localhost:%s', port);
	});

	return server;
}

module.exports = startService;
