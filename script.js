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
// Create an array of possible choices
// Generate a prompt to get the user's input of the possible choices
// Return the user's choice