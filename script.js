const OPTIONS = ["Rock", "Paper", "Scissors"];
game();

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector('#result');
    if (playerSelection === computerSelection) {
        results.textContent = `Round Result: It's a tie! 
            ${playerSelection} ties with ${computerSelection}`;
        return 0;
    }

    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
            playerSelection === "Paper" && computerSelection === "Rock" || 
            playerSelection === "Scissors" && computerSelection === "Paper") {     
        results.textContent = `Round Result: You win! 
            ${playerSelection} beats ${computerSelection}`;
        return 1;
    } else {
        results.textContent = `Round Results: You lose! 
            ${computerSelection} beats ${playerSelection}`;
        return -1;
    }
}

function game() {
    const buttons = document.querySelectorAll('button');
    const userScoreUI = document.querySelector('#user-score');
    const computerScoreUI = document.querySelector('#computer-score');
    const winner = document.querySelector('#winner');
    let userScore = 0;
    let computerScore = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const userSelection = button.textContent;
            const computerSelection = getComputerChoice();
            const result = playRound(userSelection, computerSelection);
            if (result == 1) {
                userScore++;
                userScoreUI.textContent = "User Score: " 
                    + userScore;
            } else if (result == -1) {
                computerScore++;
                computerScoreUI.textContent = "Computer Score: " 
                    + computerScore;
            }

            if (userScore == 5) {
                winner.textContent = 'You win!';
            } else if (computerScore == 5) {
                winner.textContent = 'The computer wins!';
            }
        })
    });
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