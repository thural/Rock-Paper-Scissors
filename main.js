let weapons=['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let userScore=0;
let compScore=0;

//creating dedicated funcions

const compPlays=function(){
    let randomString= Math.floor(Math.random() * weapons.length);
    computerSelection=weapons[randomString];
};

const logChoices=function(){
    console.log("You choosen: " + playerSelection);
    console.log("Computer choosen: " + computerSelection);
};

const listScenes=function(){
    sceneOne=(playerSelection=="rock" && computerSelection=="scissors");
    sceneTwo=(playerSelection=="paper" && computerSelection=="rock");
    sceneThree=(playerSelection=="scissors" && computerSelection=="paper");
};

const calcScore=function(){
    if (sceneOne || sceneTwo || sceneThree){
        alert(playerSelection + " beats " + computerSelection + "\n \n You get +1");
        userScore++;
    } else if (playerSelection===computerSelection){
        alert("Tie!");
    } else{
        alert(computerSelection + " beats " + playerSelection + "\n \n Computer gets +1");
        compScore++;
    };
};

const isGameOver=function(){
    if (userScore==5){
        alert("You Won!");
        return compScore=0, userScore=0;
        } else if(compScore==5){
        alert("Computer Won!");
        return compScore=0, userScore=0;
        }
};

const playRound=function(weapon){
    playerSelection=weapon;
    compPlays();
    logChoices();
    listScenes();
    calcScore();
    results.innerHTML='Your score: '+userScore+' Computer score: '+compScore;
    isGameOver();
};

//Selecting HTML elements
const buttons = document.querySelector('#buttons');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//Adding onclick functionality to selected elements
rock.addEventListener('click', ()=> playRound("rock"));
paper.addEventListener('click', ()=> playRound("paper"));
scissors.addEventListener('click', ()=> playRound("scissors"));

//Creating display area for game results
const results=document.createElement('div');
results.innerHTML='Your score: '+userScore+' Computer score: '+compScore;
document.body.insertBefore(results, buttons);
