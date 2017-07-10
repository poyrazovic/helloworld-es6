#! /usr/bin/env node

import commander from 'commander';
import helloWorld from '../helloworld';

commander
  .version('1.0.0')
  .option('-l, --language [language]', 'language of greeting')
  .parse(process.argv);

const greeting = helloWorld(commander.language);
console.log(greeting);
process.exit(0);
