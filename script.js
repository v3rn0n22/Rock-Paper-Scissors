//This is called caching the Dom aka storing variables for future use
let playerScore = 0;
let computerScore = 0;
let gameScoreEnd = 5;
const playerScore_span = document.getElementById('player-score');//Dom Variable, element span
const computerScore_span = document.getElementById('computer-score');//Dom variables, element span
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');//getElementById due to the location of 'r' in html
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(player, computer) {
    playerScore ++
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = player + ' beats ' + computer + ', round Won!';
}
function lose(player, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = computer + ' beats ' + player + ', round Loss!';
}
function draw(player, computer) {
    console.log('Draw!');
    result_p.innerHTML = 'Draw!';
}


function game(playerChoice) {
   const computerChoice = getComputerChoice();
   //Using switch statements shortens the if else process
    switch(playerChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(playerChoice, computerChoice);
            break;        
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(playerChoice, computerChoice);
            break;  
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(playerChoice, computerChoice);
            break;                  
    }
}


function main() {
rock_div.addEventListener('click', function() {
    game( 'Rock' );
})
paper_div.addEventListener('click', function() {
    game( 'Paper' );
})
scissors_div.addEventListener('click', function() {
    game( 'Scissors' );
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

