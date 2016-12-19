/*
* @Author: Marco Ferreira
* @Date:   2016-12-19 18:32:55
* @Last Modified by:   Marco Ferreira
* @Last Modified time: 2016-12-19 18:35:58
*/

'use strict';

var _ = require('lodash');

module.exports = {
	getAlphabeticChars: function(str) {
		return str.replace(/[^a-zA-Z]*/ig, '');
	},

	reverseString: function(str) {
		return _.reverse(str.split('')).join('');
	}
}
