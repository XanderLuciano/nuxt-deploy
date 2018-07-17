#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1', '-v, --version').option('-d', '--deploy', 'Deploy to server').parse(process.argv);

// Author: Xander Luciano<XanderLuciano@gmail.com>
// 2018-07-16

console.log('hello world.');

console.log(JSON.stringify(_commander2.default));

console.log('done.');