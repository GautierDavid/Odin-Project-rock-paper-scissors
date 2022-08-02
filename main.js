
let computerChoice;
let playerSlection;
let playerVictoryCount = 0;
let computerVictoryCount = 0;
let choiceArr = ["rock", "paper", "scissors"]


let choiceButton = document.querySelectorAll('.choice');

choiceButton.forEach(possibilities => {
    possibilities.addEventListener('click', playRound);
})



function getComputerChoice() {
    return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}




function playRound(playerSelection, computerChoice) {
    
    playerSelection = event.currentTarget.id;
    computerChoice = getComputerChoice()

    if (playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissors" || playerSelection === "scissors" && computerChoice === "rock") {
        console.log("You lose! " + playerSelection + " is beaten by " + computerChoice)
        computerVictoryCount ++

    } else if (playerSelection === "paper" && computerChoice === "rock" || playerSelection === "scissors" && computerChoice === "paper" || playerSelection === "rock" && computerChoice === "scissors") {
        console.log("You win! " + playerSelection + " beats " + computerChoice) 
        playerVictoryCount ++

    } else if (playerSelection === computerChoice) { 
        console.log("It's a Tie!")

    } else {
        console.log("You made a mistake on your choice")
    }

    refreshScore(playerVictoryCount, computerVictoryCount)
}


function refreshScore(playerScore, computerScore) {
    
}




// function playRound(playerSelection, computerSelection, playerCount, computerCount) {
    
//     if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
//         console.log("You lose! " + computerSelection + " beats " + playerSelection)
        
//         return computerCount ++ 
        
//     } else  {
//         console.log("You win! " + playerSelection + " beats " + computerSelection) 
//         return playerCount ++
//     }
// }

// function game() {

//     for(let i = 0; i < 5; i++) {
//         const playerSelection = prompt("What is your choice between rock, paper and scissors ?");
//         const computerSelection = getComputerChoice();
//         console.log(computerSelection, i)
//         playRound(playerSelection, computerSelection, playerCount, computerCount)
//     }

//     if(playerCount > computerCount) {
//         console.log("You win the game " + playerCount + " vs " + computerCount + "!")
//     } else {
//         console.log("You lose the game " + playerCount + " vs " + computerCount + "...")
//     } 
// }

// game()

