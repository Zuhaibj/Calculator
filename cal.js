import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: 'Kindly input your 1st number'
    },
    {
        type: "number",
        name: "num2",
        message: 'Kindly input your 2nd number'
    },
    {
        type: "list",
        name: "operator",
        message: 'What operations you want to perform?',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
if (answer.operator === 'Addition') {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === 'Division') {
    console.log(answer.num1 / answer.num2);
}
