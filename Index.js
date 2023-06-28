//function getComputer()
function getComputerChoice() {
    // array of choice strings
    const  choices=['Rock','Paper','Scissors']
    // Get a random index from the array.
      const index = Math.floor(Math.random() * choices.length);

  // Return the string at the random index.
  return choices[index];

}

function player(playerSelection,computerSelection) {

    playerSelection=prompt("Enter  Your Selection Here:");
    let a=playerSelection.toString().upperCase();
    // computerSelection=choices[index];
     // Create an array of the possible choices.
  const choices = ["ROCK", "PAPER", "SCISSORS"];

  // Determine the winner of the round.
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}
