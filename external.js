const possible_choices = ["Rock","Paper","Scissors"];
let count = 0;
let wins = 0;
let loss = 0;
function getComputerChoice(){
    return possible_choices[Math.floor(Math.random()*3)];
}
function playAround(playerSelection,computerSelection){
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        return "It is a draw!";
    } else if(computerSelection.toUpperCase() == "PAPER"){
        count -= 1;
        loss += 1;
        return "You lose! Paper beats Rock";
    } else{
        count += 1;
        wins += 1;
        return "You win! Rock beats Scissors";
    }
}


const playerSelection = "rock";

function game(){
    for(let i=0;i<5;i++){
        const computerSelection = getComputerChoice();
        playAround(playerSelection,computerSelection);
        console.log(playAround(playerSelection,computerSelection));
    }
    console.log("Total wins:"+wins);
    console.log("Total loss:"+loss);
    console.log("Total score:"+count)
}

game();