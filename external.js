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
    } else if((playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") || (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase()=="ROCK") || (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase()=="SCISSORS")){
        count -= 1;
        loss += 1;
        return "You lose!"+ computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();
    } else{
        count += 1;
        wins += 1;
        return "You win! "+playerSelection.toUpperCase()+" beats "+computerSelection.toUpperCase();
    }
}



function game(){
    count = 0;
    wins = 0;
    loss = 0;
    for(let i=0;i<5;i++){
        const playerSelection = prompt("Enter rock or paper or scissor: ");
        const computerSelection = getComputerChoice();
        playAround(playerSelection,computerSelection);
        console.log(playAround(playerSelection,computerSelection));
    }
    console.log("Total wins:"+wins);
    console.log("Total loss:"+loss);
    console.log("Total score:"+count)
}

game();