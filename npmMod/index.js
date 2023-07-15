const chalk = require("chalk");
const validator = require("validator");
// Coloring different text messages
// console.log(chalk.green("Welcome to Tutorials Point"))
// console.log(chalk.red.underline("Welcome to Tutorials Point"))
// console.log(chalk.red.underline.bold.inverse("Welcome to Tutorials Point"))

const res = validator.isEmail("kau@tutorial.com");
console.log(res ? chalk.bgRedBright.inverse(res) : chalk.green.inverse(res));
