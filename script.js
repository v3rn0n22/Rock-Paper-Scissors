function getComputerChoice() { 
//Created an array so variable = Rock,Paper,Scissors
  let randomPick = ['Rock', 'Paper', 'Scissors'];
//Returns random element within the array. Math.floor/Math.random, randomizes the item picked in the array. .length assigns a number to the array ( in this case cycles through 3 options)
  return randomPick [Math.floor(Math.random() * randomPick.length)];
}
//Calling the function created
//console.log(getComputerChoice());
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
//If player and computer pick the same its a tie, if not the following determines who wins/loses
        return 'Its a tie!'
    }else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'Paper beats Rock, you lose!'
    }else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'Rock beats Scissors, you win!'
    }else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'Paper beats Rock, you win!'
    }else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'Scissors beats Paper, you lose!'
    }else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'Rock beats Scissors, you lose!'
    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'Scissor beats Paper, you win!'
    }

}
const playerSelection = 'Rock'; //Declares the player choice
const computerSelection = getComputerChoice(); //calls getComputerChoice function to declare the computers choice

console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));


function game(playRound) {
    for(let i = 0; i< 5; i++){
        
        console.log(i);
    }
}
game(playRound);
//let i = parseInt(prompt('Rock,Paper,Scissors?')) ;