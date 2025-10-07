// Create a function
function getComputerChoice() {
// Create an array of possible choices
  const choices = ["rock", "paper", "scissors"];
// Generate a random index
  const randomIndex = Math.floor(Math.random() * choices.length);
// Return one random choice
  return choices[randomIndex];
}

console.log(getComputerChoice());

// Create a new function (getHumanChoice)
function getHumanChoice() {
// Create an array of possible choices
  const choices = ["rock", "paper", "scissors"];
// Generate a prompt to get the user's input of the possible choices
  let answer = prompt("Input your choice: ");
// Return the user's choice
  if (choices.includes(answer)) {
    return answer;
  }
}

console.log(getHumanChoice());

// Create two new varialbes named humanScore and computerScore
// Initialize variables with the value of 0
let humanScore = 0;
let computerScore = 0;