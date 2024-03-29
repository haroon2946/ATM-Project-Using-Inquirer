#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 12000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Please enter pin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log(" Your pin is correct");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    // withdraw transaction
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`The remaining balance is ${balance}`);
        }
        else {
            console.log(`You have Insufficient balance`);
        }
    }
    else if (operationAnswer.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "5000", "10000"],
            },
        ]);
        if (fastcashAns.amount <= myBalance) {
            let balance = myBalance - fastcashAns.amount;
            console.log(`The remaining balance is ${balance}`);
        }
        else {
            console.log(`You have insufficient amout`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Your pin is wrong");
}
