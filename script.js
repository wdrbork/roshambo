const OPTIONS = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    }
    
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Paper" && computerSelection === "Rock" || 
            playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function capitalize(selection) {
    return selection.substring(0, 1).toUpperCase() + 
        selection.substring(1).toLowerCase();
}