//Declaring global variables
const weapons = ['rock', 'paper', 'scissors'];
let playerChoice, computerChoice, userScore = 0, compScore = 0;
//Creating dedicated funcions
const computerPlays = function() {
  let randomString = Math.floor(Math.random() * weapons.length);
  computerChoice = weapons[randomString]
};
const listScenes = function() {
  sceneOne = (playerChoice == "rock" && computerChoice == "scissors");
  sceneTwo = (playerChoice == "paper" && computerChoice == "rock");
  sceneThree = (playerChoice == "scissors" && computerChoice == "paper")
};
const calcScore = function() {
  if (sceneOne || sceneTwo || sceneThree) {
    message.textContent = playerChoice + " beats " + computerChoice + ", You get +1";
    userScore++
  } else if (playerChoice === computerChoice) {
    message.textContent = "Tie!"
  } else {
    message.textContent = computerChoice + " beats " + playerChoice + ", Foe gets +1";
    compScore++
  }
};
const returnResults = function() {
  results.textContent = `You : ${userScore} | Computer : ${compScore}`
};
const isGameOver = function() {
  if (userScore == 5) {
    message.textContent ="You Won!"
  } else if (compScore == 5) {
    message.textContent ="Game Over!"
  }
};
//Gameplay logic with function sequence
const playRound = function() {
  computerPlays();
  listScenes();
  calcScore();
  returnResults();
  isGameOver()
};
//Manupilate HTML elements
const buttons = document.querySelector('.buttons');
const newGAme = document.querySelector('#newGame');
//Adding onclick functionality to the elements
buttons.addEventListener('click', function(event) {
  playerChoice = event.target.id;
  if (userScore == 5 || compScore == 5) {
    return;
  } else if (playerChoice) {
    return playRound()
  }
});
newGame.addEventListener('click', () => {
  return userScore = 0, compScore = 0, message.textContent = 'Choose Your Weapon!',returnResults()
});
//Creating display area for game results
const results = document.querySelector('#results');
results.textContent = `You : ${userScore} | Computer : ${compScore}`;

const message = document.querySelector('#message');
message.textContent = 'Choose Your Weapon!';
