const OPTIONS = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}