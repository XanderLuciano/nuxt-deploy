#!/usr/bin/env node

// Author: Xander Luciano<XanderLuciano@gmail.com>
// 2018-07-16

import program from 'commander'


program
    .version('0.0.1', '-v, --version')
    .option('-d', '--deploy', 'Deploy to server')
    .parse(process.argv);


console.log('hello world.');

console.log(JSON.stringify(program));

console.log('done.');
