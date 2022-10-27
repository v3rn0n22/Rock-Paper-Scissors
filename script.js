//This is called caching the Dom aka storing variables for future use
const playerScore = 0;
const computeScore = 0;
const playerScore_span = document.getElementById('player-score');//Dom Variable, element span
const computerScore_span = document.getElementById('computer-score');//Dom variables, element span
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');//getElementById due to the location of 'r' in html
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    console.log('You win!')
}

function game(playerChoice) {
   const computerChoice = getComputerChoice();
   //Using switch statements shortens the if else process
    switch(playerChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            wins();
            break;        
        case 'rp':
        case 'ps':
        case 'sr':
            lose();
            break;  
        case 'rr':
        case 'PP':
        case 'SS':
            draw();
            break;                  
    }
   
  
}
game('i');

function main() {
rock_div.addEventListener('click', function() {
    game('r');
})
paper_div.addEventListener('click', function() {
    game('p');
})
scissors_div.addEventListener('click', function() {
    game('s');
})
}

main();









/*let playerSelection //Declares the player choice
let computerSelection = getComputerChoice(); //calls getComputerChoice function to declare the computers choice


function getComputerChoice() { 
//Created an array so variable = Rock,Paper,Scissors
  let randomPick = ['Rock', 'Paper', 'Scissors'];
Returns random element within the array. Math.floor/Math.random, randomizes the item picked in the array. .length assigns a number to the array ( in this case cycles through 3 options)
 // return randomPick [Math.floor(Math.random() * 3)];
}



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

/*function game(playRound) {
    for(let i = 0; i< 5; i++){
        if (i = rock )
        console.log(i);
    }
}
game(playRound);*/

