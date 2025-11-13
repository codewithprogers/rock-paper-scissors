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

// Create a new function (playGame)
// Move playRound and score variables so they are declared inside of playGame
// Play 5 rounds by calling playRound 5 times

// Function to play five rounds, keep the score, and state the winner
function playGame() {
// Create two new variables named humanScore and computerScore
// Initialize variables with the value of 0
  let humanScore = 0;
  let computerScore = 0;
// Create a new function (playRound)
// Define two parameters for playRound (humanChoice and computerChoice)
  function playRound(humanChoice, computerChoice) {
// Use these two parameters to take those choices as arguments
// Make the function's humanChoice parameter case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
// Have playRound console.log a string value representing the round winner, such as: "You lose! Paper beats Rock"
// Increment the humanScore or computerScore variable based on the round winner
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") || 
      (humanChoice === "paper" && computerChoice === "rock") || 
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore += 1;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  }
  
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i}:`);
    playRound(humanSelection, computerSelection);
    console.log("-------------");
  }

  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();