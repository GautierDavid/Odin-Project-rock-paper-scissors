
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) return "Rock"
    else if(randomNumber === 2) return "Paper"
    else return "Scissors"
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") return "You lose! " + computerSelection + " beats " + playerSelection
    else return "You win! " + playerSelection + " beats " + computerSelection
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));