function getComputerChoice() { 
//Created an array so variable = Rock,Paper,Scissors
  const randomPick = ['Rock', 'Paper', 'Scissors'];
//Returns random element within the array. Math.floor/Math.random, randomizes the item picked in the array. .length assigns a number to the array ( in this case cycles through 3 options)
  return randomPick [Math.floor(Math.random() * randomPick.length)];
}
//Calling the function created
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Its a tie!'
    }else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'Paper beats Rock, you LOSE!'
    }else if (playerSelection == 'Scissor' && computerSelection == 'Rock') {
        return 'Rock beats Scissors, you LOSE!'
    }else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'Scissor beats Paper, you LOSE!'
    }else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'Rock beats Scissors, you WIN!'
    }else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'Paper beats rock, you WIN!'
    }else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'Scissor beats Paper, you WIN!'
    }

}
const playerSelection = 'Rock';
const computerSelection = (getComputerChoice());
console.log(playRound(playerSelection, computerSelection));