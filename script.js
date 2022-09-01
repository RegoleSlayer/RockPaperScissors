// Rock, Paper, Scissors Game

//Generate computer selection randomly
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * options.length);
    return random;
}

//Prompt user for a selection
function getPlayerChoice() {
    let input = prompt("Rock, Paper, or Scissors?", "Rock");
    let choice = input.toLowerCase();
    if (choice === "rock") {
        let value = 0;
        return value;
    } else if (choice === "paper") {
        let value = 1;
        return value;
    } else if (choice === "scissors") {
        let value = 2;
        return value;
    } else {
        console.log("Invalid input. You lose!");
    }
}

// Construct a "round" function to compare player vs computer selections a single time.

function playRound(playerSelection, computerSelection) {
    //Player chooses rock
    if (playerSelection === 0 && computerSelection === 0) {
    console.log("You chose Rock. The computer chose Rock. Tied round!");
    } else if (playerSelection === 0 && computerSelection === 1) {
        console.log("You chose Rock. The computer chose Paper. You lose the round!");
        let computerWin = true;
        return computerWin;
    } else if (playerSelection === 0 && computerSelection === 2) {
        console.log("You chose Rock. The computer chose Scissors. You win the round!");
        let playerWin = true;
        return playerWin;
    //Player chooses paper
    } else if (playerSelection === 1 && computerSelection === 0) {
        console.log("You chose Paper. The computer chose Rock. You win the round!");
        let playerWin = true;
        return playerWin;
    } else if (playerSelection === 1 && computerSelection === 1) {
        console.log("You chose Paper. The computer chose Paper. Tied round!");
    } else if (playerSelection === 1 && computerSelection === 2) {
        console.log("You chose Paper. The computer chose Scissors. You lose the round!");
        let computerWin = true;
        return computerWin;
    //Player chooses scissors
    } else if (playerSelection === 2 && computerSelection === 0) {
        console.log("You chose Scissors. The computer chose Rock. You lose the round!");
        let computerWin = true;
        return computerWin;
    } else if (playerSelection === 2 && computerSelection === 1) {
        console.log("You chose Scissors. The computer chose Paper. You win the round!");
        let playerWin = true;
        return playerWin;
    } else if (playerSelection === 2 && computerSelection === 2) {
        console.log("You chose Scissors. The computer chose Scissors. Tied round!");
    } else {
        console.log("What did you do???");
    }
}

// Run 5 round functions, declaring an overall winner at the end based on who won the most.
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    playRound(playerSelection, computerSelection);
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        if (playerWin = true) {
            playerPoints++;
        } else if (computerWin = true) {
            computerPoints++;
        } else {
            playerPoints;
            computerPoints;
        }
    }
    if (computerPoints > playerPoints) {
        console.log("You lost the game! Refresh the page to play again.");
    } else if (computerPoints < playerPoints) {
        console.log("You won the game! Refresh the page to play again.");
    } else {
        console.log("Tied game! Refresh the game to play again.");
    }
}

// Prompt to start a new game.
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
game();
console.log(playerSelection);
console.log(computerSelection);
playRound(playerSelection, computerSelection);