import inquirer from "inquirer";
// 1) computer will generate a random number -Done
// 2) user input for guessing number
// 3) coompare user input with computer generated number shoe result
//  const randomNumber = Math.random();
//  console.log(randomNumber);
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guees a number: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
