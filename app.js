const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const DRAW = "DRAW";
const PLAYER_WINS = "PLAYER_WINS";
const COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
   const selection = prompt(
      `${ROCK}, ${PAPER} or ${SCISSORS}?`,
      ""
   ).toUpperCase();

   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Wrong answer, we chose ${DEFAULT_USER_CHOICE} for you!`);
      return DEFAULT_USER_CHOICE;
   }

   return selection;
};

const getComputerChoice = () => {
   const computerChoice = Math.random();

   if (computerChoice < 0.34) {
      return ROCK;
   } else if (computerChoice < 0.67) {
      return PAPER;
   } else {
      return SCISSORS;
   }
};

const matchResult = (playerChoice, computerChoice) => {
   // Ternary expression
   return playerChoice === computerChoice
      ? DRAW
      : (playerChoice === ROCK && computerChoice === SCISSORS) ||
        (playerChoice === PAPER && computerChoice === ROCK) ||
        (playerChoice === SCISSORS && computerChoice === PAPER)
      ? PLAYER_WINS
      : COMPUTER_WINS;

   // if (playerChoice === computerChoice) {
   //    return DRAW;
   // } else if (
   //    (playerChoice === ROCK && computerChoice === SCISSORS) ||
   //    (playerChoice === PAPER && computerChoice === ROCK) ||
   //    (playerChoice === SCISSORS && computerChoice === PAPER)
   // ) {
   //    return PLAYER_WINS;
   // } else {
   //    return COMPUTER_WINS;
   // }
};

startGameBtn.addEventListener("click", () => {
   if (gameIsRunning) {
      return;
   }
   gameIsRunning = true;
   const playerSelection = getPlayerChoice();
   const computerSeelction = getComputerChoice();
   const result = matchResult(playerSelection, computerSeelction);
   console.log(
      `Player: ${playerSelection} - CPU: ${computerSeelction}, thus ${result}`
   );
});
