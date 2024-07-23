import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan `Enjoy!`);
let number = await inquirer.prompt([
    {
        name: "usernumber",
        type: "input",
        message: chalk.yellow("Enter any two-digit number "),
        validate: (number) => {
            if (isNaN(number)) {
                return chalk.red `Please enter number`;
            }
            else if (number > 99) {
                return chalk.red `Please enter two-digit number`;
            }
            else if (number == "") {
                return chalk.red `Please enter a number`;
            }
            else if (number < 10) {
                return chalk.red `Please enter two digit number`;
            }
            return true;
        }
    }
]);
let input = number.usernumber;
console.log(chalk.bold `YOUR NUMBER:${input}`);
setTimeout(() => {
    let generatednumber = Math.floor(Math.random() * 89 + 10);
    console.log(chalk.bold `NUMBER:${generatednumber}`);
    if (generatednumber === input) {
        console.log(chalk.green("You guessed it right!"));
    }
    else {
        console.log(chalk.blue("You guessed it wrong,Try again"));
    }
}, 3000);
