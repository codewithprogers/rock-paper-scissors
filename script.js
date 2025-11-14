let humanScore = 0;
let computerScore = 0;

const div = document.createElement("div");
document.body.appendChild(div);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    resultMessage = `You Win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    resultMessage = (`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  let scoreMessage = `Score - You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    scoreMessage = `Final Score - You: ${humanScore}, Computer: ${computerScore}`;
  }

  div.textContent = `${resultMessage}\n${scoreMessage}`;
}

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

rockBtn.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) playRound("rock")
});
paperBtn.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) playRound("paper")
});
scissorsBtn.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) playRound("scissors")
});
