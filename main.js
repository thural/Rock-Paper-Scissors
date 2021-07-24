    
    const button = document.querySelector('button');

    let weapons=['rock', 'paper', 'scissors'];
    let randomString;
    let userChoice;
    let compChoice;
    let userScore=0;
    let compScore=0;
    let maxNum=Infinity;

    function userPlays(){
        userChoice = prompt("Choose Your Weapon");
        userChoice=userChoice.toLowerCase();
    }

    function compPlays(){
        randomString= Math.floor(Math.random() * weapons.length);
        compChoice=weapons[randomString];
    }

    function logChoices(){
        console.log("Computer choosen: " + compChoice);
        console.log("You choosen: " + userChoice);
    }

    function listScenes(){
        sceneOne=(userChoice=="rock" && compChoice=="scissors");
        sceneTwo=(userChoice=="paper" && compChoice=="rock");
        sceneThree=(userChoice=="scissors" && compChoice=="paper");
    }
    
    function calcScore(){
        if (sceneOne || sceneTwo || sceneThree){
            alert(userChoice + " beats " + compChoice + "\n \n You get +1");
            userScore++;
        } else if (userChoice===compChoice){
            alert("Tie!");
        } else{
            alert(compChoice + " beats " +userChoice + "\n \n Computer gets +1");
            compScore++;
        }
    }

    function isWonOrLost(){
        if (userScore==5){
            alert("You Won!");
            } else if(compScore==5){
            alert("Computer Won!");
            } else{
            alert("Your score is: " + userScore + "\n \n Computer score is: " + compScore);
            }
    }

    function isGameOver(){
        if (compScore==5 || userScore==5){
            compScore=0;
            userScore=0;
            maxNum=1;
        }
    }

    button.onclick = function(){

        for ( i = 1; i <= maxNum; i++){
            userPlays();
            compPlays();
            logChoices();
            listScenes();
            calcScore();
            isWonOrLost();
            isGameOver();
        }
    }
