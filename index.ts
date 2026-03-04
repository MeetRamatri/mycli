#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();

import CliEngine from "./cli_engine/cli_engine";
import greet_command from "./Commands/greetingCommand";
import joke_command from "./Commands/jokeCommand";
import github_command from "./Commands/githubUserCommand";
import weather_command from "./Commands/weatherCommand";
import quote_command from "./Commands/quoteCommand";
import add_command from "./Commands/addCommand";
import multiply_command from "./Commands/multiplyCommand";
import subtract_command from "./Commands/subtractCommand";
import divide_command from "./Commands/divideCommand";
import modulus_command from "./Commands/modulusCommand";

const engine = new CliEngine();
engine.registorCommand([
	greet_command,
	joke_command,
	github_command,
	weather_command,
	quote_command,
	add_command,
	multiply_command,
	subtract_command,
	divide_command,
	modulus_command,
]);
engine.run()
// program
//     .command('greet <name>')
//     .action((name: string) => {
//         console.log(`Hello, ${name}! Welcome to my CLI tool.`);
//     });

// program
//     .command('add <num1> <num2>')
//     .action((num1: string, num2: string) => {
//         const sum = parseFloat(num1) + parseFloat(num2);
//         console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
//     });
    
// program
//     .command('subtract <num1> <num2>')
//     .action((num1: string, num2: string) => {    
//         const difference = parseFloat(num1) - parseFloat(num2);
//         console.log(`The difference between ${num1} and ${num2} is ${difference}.`);
//     });

// program
//     .command('multiply <num1> <num2>')
//     .action((num1: string, num2: string) => {
//         const product = parseFloat(num1) * parseFloat(num2);
//         console.log(`The product of ${num1} and ${num2} is ${product}.`);
//     });

// program
//     .command('divide <num1> <num2>')
//     .action((num1: string, num2: string) => {
//         if (parseFloat(num2) === 0) {
//             console.log('Undefined');
//             return;
//         }
//         const quotient = parseFloat(num1) / parseFloat(num2);
//         console.log(`The quotient of ${num1} and ${num2} is ${quotient}.`);
//     });

// program.parse();