#!/usr/bin/env node
const program = require('commander');

// import menus
const topics = require('../lib/topics');
const browse = require('../lib/browse');

// print topic menu
program
  .command('topics')
  .alias('t')
  .description('All topics')
  .action(function () {
    topics();
  });

// print browse menu
program
  .command('browse')
  .alias('b')
  .description('Browse a topic')
  .action(function () {
    browse();
  });  

// allow commander to parse `process.argv`
program.parse(process.argv);