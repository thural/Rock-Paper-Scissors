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
    alert(playerChoice + " beats " + computerChoice + "\n You get +1");
    userScore++
  } else if (playerChoice === computerChoice) {
    alert("Tie!")
  } else {
    alert(computerChoice + " beats " + playerChoice + "\n Computer gets +1");
    compScore++
  }
};
const returnResults = function() {
  results.textContent = `You : ${userScore} | Computer : ${compScore}`
};
const isGameOver = function() {
  if (userScore == 5) {
    alert("You Won!")
  } else if (compScore == 5) {
    alert("Computer Won!")
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
  return userScore = 0, compScore = 0, returnResults()
});
//Creating display area for game results
const results = document.querySelector('#results');
results.textContent = `You : ${userScore} | Computer : ${compScore}`;

const message = document.querySelector('#message');
message.textContent = 'Pick Your Weapon';
