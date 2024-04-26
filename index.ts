#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

//tsk 1 if else use ho ga agr withdraw 50000se ziada ho ga tu wo message de ga Excead Limit balance
//task 2  use template literals

let myBalance = 90000; //dollar
let myPin: any = 1234;

//enter your pin 
let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.bgYellow("\n Enter your pin(4 digits)?"),
    type: "number",
  },
]);

// pin code is correct 
if (pinAns.pin === myPin) {
  console.log(chalk.bgGreen("correct pincode!"));
  console.log(chalk.gray("\n*-------------------------------*"));
    //choose option 
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: chalk.yellow("\n choose one option"),
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"],
    },
  ]);
         // if we select withdraw option 
  if (operationAns.operation === "withdraw") {
                     //amount select 
    let withdrawNumber = await inquirer.prompt([
      {
        name: "amount",
        message: chalk.yellow("\n choose your amount:"),
        type: "list",
        choices: ["100","200","500","1000", "2000","3000", "5000", "10000"]
      },
    ]);
                             //amount <=100
    if (withdrawNumber.amount <= 100) {
      myBalance -= withdrawNumber.amount;
      console.log(chalk.green(`You withdraw ${withdrawNumber.amount}`));
      console.log(chalk.green(`The remaining amount is:  ${myBalance}`));
      console.log(chalk.gray("\n *---------------------------------------*"));
    }                          //amount > 9000
      else if (withdrawNumber.amount > 9000) {
      console.log(chalk.red("Exceed balance Limit!"));
      console.log(chalk.gray("\n **==================================**"));
    }

  }
         //if we select check balance 
  else if (operationAns.operation === "check balance") {
    console.log(chalk.green(`Total amount is:  ${myBalance}`));
    console.log(chalk.gray("\n *-----------------------------------*"));
  }
} 
//if pin code is incorrect 
else {
  console.log(chalk.red("oops! Incorrect pincode"));
  console.log(chalk.bgBlue("\n **=======================================**"));
}