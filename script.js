let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = "";

  resultsDiv.classList.remove("win", "lose");

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") || 
    (humanChoice === "Paper" && computerChoice === "Rock") || 
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore += 1;
    resultMessage = `You Win! ${humanChoice} beats ${computerChoice}`;
    resultsDiv.classList.add("win");
  } else {
    computerScore += 1;
    resultMessage = (`You lose! ${computerChoice} beats ${humanChoice}`);
    resultsDiv.classList.add("lose");
  } if (humanScore === 5) {
    showConfetti();
  }

  let scoreMessage = `Score - You: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    scoreMessage = `Final Score - You: ${humanScore}, Computer: ${computerScore}`;
  }

  resultsDiv.textContent = `${resultMessage}\n${scoreMessage}`;
}

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

const buttonsDiv = document.querySelector(".buttons");
const resultsDiv = document.querySelector(".results");

buttonsDiv.appendChild(rockBtn);
buttonsDiv.appendChild(paperBtn);
buttonsDiv.appendChild(scissorsBtn);

rockBtn.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) playRound("Rock")
});
paperBtn.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) playRound("Paper")
});
scissorsBtn.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) playRound("Scissors")
});

const rulesHeader = document.querySelector(".rule-header");
const rulesContent = document.getElementById("rules-content");

rulesHeader.addEventListener('click',() => {
  const isCurrentlyHidden = rulesContent.hidden;
  rulesContent.hidden = !isCurrentlyHidden;

  rulesHeader.setAttribute("aria-expanded", !isCurrentlyHidden);
});