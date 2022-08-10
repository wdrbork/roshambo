const OPTIONS = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#result');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const result = playRound(button.textContent, computerSelection);
        results.textContent = result;
    })
});

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

function game() {
    let playerSelection = promptUser();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

// Uses console and prompts to play the game; outdated version

// function promptUser() {
//     let choice = capitalize(prompt("What is your choice? "))
//     while (!OPTIONS.includes(choice)) {
//         choice = capitalize(prompt("Invalid choice! Please try again" ));
//     }
    
//     return choice;
// }

// function capitalize(selection) {
//     return selection.substring(0, 1).toUpperCase() + 
//         selection.substring(1).toLowerCase();
// }