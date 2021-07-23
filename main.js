        
            const button = document.querySelector('button');

            button.onclick = function(){
                let choices=['rock', 'paper', 'scissors'];
                let randomChoice;
                let userSelects;
                let compSelects;
                let userScore=0;
                let compScore=0;

                for ( i = 1; i != Infinity; i++){
                    randomChoice= Math.floor(Math.random() * choices.length);
                    compSelects=choices[randomChoice];
                    userSelects = prompt("Choose Your Weapon");
                    userSelects=userSelects.toLowerCase();

                    console.log("Random choice number by computer: " + randomChoice);

                    console.log("Computer choosen: " + compSelects);
                    console.log("You choosen: " + userSelects);

                    let sceneOne=(userSelects=="rock" && compSelects=="scissors");
                    let sceneTwo=(userSelects=="paper" && compSelects=="rock");
                    let sceneThree=(userSelects=="scissors" && compSelects=="paper");

                    if (sceneOne || sceneTwo || sceneThree){
                        alert(userSelects + " beats " + compSelects + "\n You get +1");
                        userScore++;
                    } else if (userSelects===compSelects){
                        alert("Tie!");
                    } else{
                        alert(compSelects + " beats " +userSelects + "\n Computer gets +1");
                        compScore++;
                        }

                    if (userScore==5){
                    return alert("You Won!");
                    } else if(compScore==5){
                    return alert("Computer Won!");
                    } else{
                    alert("Your score is: " + userScore + "\n Computer score is: " + compScore);
                    }
                }
            }
