const array = ["Rock","Paper","Scissors"];
function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    return x;
}

console.log(array[getComputerChoice()]);