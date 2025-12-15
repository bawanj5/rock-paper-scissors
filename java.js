function getComputerChoice() {
    let num = Math.random();
    if (num < 0.33) {
        return compChoice = "rock";
    } else if (num > 0.33 && num < 0.67) {
        return compChoice = "paper";
    } else if (num > 0.67) {
        return compChoice = "scissors";
    }
}

function getHumanchoice() {
    humanChoice = prompt("Please enter either rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let compScore = 0;
let round = 0;
let compChoice;
let humanChoice;

function playRound(humanChoice, compChoice) {
    if (compChoice === "rock" && humanChoice === "scissors") {
        compScore++;
        alert("Rock beats scissors, computer wins!");
    } else if (compChoice === "rock" && humanChoice === "rock") {
        alert("Rock vs rock, it's a draw!")
    } else if (compChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        alert("Paper beats rock, you win!");
    } else if (compChoice === "paper" && humanChoice === "rock") {
        compScore++;
        alert("Paper beats rock, computer wins!");
    } else if (compChoice === "paper" && humanChoice === "paper") {
        alert("Paper vs paper, it's a draw!");
    } else if (compChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        alert("Scissors beats paper, you win!");
    } else if (compChoice === "scissors" && humanChoice === "paper") {
        compScore++;
        alert("Scissors beats paper, computer wins!");
    } else if (compChoice === "scissors" && humanChoice === "scissors") {
        alert("Scissors vs scissors, it's a draw!");
    } else if (compChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        alert("Rock beats scissors, you win!");
    }
    return round++;
}

function playGame() {
    while (round < 5) {
        getComputerChoice();
        getHumanchoice();
        playRound(humanChoice, compChoice)
    }
    if (humanScore > compScore) {
        alert("Congrats! You win!")
    } else if (humanScore === compScore) {
        alert("It's a draw!")
    } else if (humanScore < compScore) {
        alert("Computer wins! Better luck next time!")
    }
}

playGame()
