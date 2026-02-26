#!/usr/bin/env node
const {Command}= require('commander');
const program = new Command();
program
.command('greet <name>')
.action((name: string) => {
    console.log(`Hello, ${name}! Welcome to my CLI tool.`);
});
program.parse();