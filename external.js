const possible_choices = ["Rock","Paper","Scissors"];
function getComputerChoice(){
    return possible_choices[Math.floor(Math.random()*3)];
}
function playAround(playerSelection,computerSelection){
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        return "It is a draw!";
    } else if(computerSelection.toUpperCase() == "PAPER"){
        return "You lose! Paper beats Rock";
    } else{
        return "You win! Rock beats Scissors";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playAround(playerSelection,computerSelection));