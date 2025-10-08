// Create a function
function getComputerChoice() {
// Create an array of possible choices
  const choices = ["rock", "paper", "scissors"];
// Generate a random index
  const randomIndex = Math.floor(Math.random() * choices.length);
// Return one random choice
  return choices[randomIndex];
}

// Create a new function (getHumanChoice)
function getHumanChoice() {
// Create an array of possible choices
  const choices = ["rock", "paper", "scissors"];
// Generate a prompt to get the user's input of the possible choices
  let answer = prompt("Input your choice: ").toLowerCase();
// Return the user's choice
  if (choices.includes(answer)) {
    return answer;
  }
}

// Create two new variables named humanScore and computerScore
// Initialize variables with the value of 0
let humanScore = 0;
let computerScore = 0;

// Create a new function (playRound)
// Define two parameters for playRound (humanChoice and computerChoice)
// Use these two parameters to take those choices as arguments
// Make the function's humanChoice parameter case-insensitive
// Have playRound console.log a string value representing the round winner, such as: "You lose! Paper beats Rock"
// Increment the humanScore or computerScore variable based on the round winner