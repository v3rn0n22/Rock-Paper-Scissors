function getComputerChoice() { 
//Created an array so variable = Rock,Paper,Scissors
  const randomPick = ['Rock', 'Paper', 'Scissors'];
//Returns random element within the array. Math.floor/Math.random, randomizes the item picked in the array. .length assigns a number to the array ( in this case cycles through 3 options)
  return randomPick [Math.floor(Math.random() * randomPick.length)];
}
//Calling the function created
console.log(getComputerChoice());