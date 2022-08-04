
let computerChoice;
let playerSlection;
let playerVictoryCount = 0;
let computerVictoryCount = 0;
let choiceArr = ["rock", "paper", "scissors"]

let choiceButton = document.querySelectorAll('.choice'); // get the button
let resultContainer = document.querySelector('.result'); // get the div where we'll show the result of a round
let pUser = document.querySelector('.user-score'); // get the p for user
let pComputer = document.querySelector('.computer-score'); // get the p for computer


// add event listener on all button
choiceButton.forEach(possibilities => {
    possibilities.addEventListener('click', playRound);
})


/**
 * function the computer choice thanks to a random method applied on an arr that contains the possibilities
 * @returns 
 */
function getComputerChoice() {
    return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}



/**
 * Function to see who win the round and show it
 * @param {*} playerSelection 
 * @param {*} computerChoice 
 */
function playRound(playerSelection, computerChoice) {
    
    playerSelection = event.currentTarget.id; // the id that start the event
    computerChoice = getComputerChoice(); // call the function to get the computer choice

    
    if (playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissors" || playerSelection === "scissors" && computerChoice === "rock") {
        resultContainer.innerHTML = `<p>You lose! ${playerSelection} is beaten by ${computerChoice}</p>`;
        computerVictoryCount ++;
    } else if (playerSelection === computerChoice) { 
        resultContainer.innerHTML = `<p>It's a Tie!</p>`;
    } else {
        resultContainer.innerHTML = `<p>You win! ${playerSelection} beats ${computerChoice}</p>`;
        playerVictoryCount ++;
    }
    
    refreshScore(playerVictoryCount, computerVictoryCount)
}


function refreshScore(playerScore, computerScore) {
    
    if(playerScore < 5 && computerScore < 5) {
        pUser.innerHTML = `My score: ${playerScore}`;
        pComputer.innerHTML = `Computer score : ${computerScore}`;
    } else if(playerScore > 5) {
        pUser.innerHTML = `Congratulations, you win the game ${playerScore} to ${computerScore} !`;
        choiceButton.forEach(possibilities => {
            possibilities.removeEventListener('click', playRound);
        })
        pComputer.style.visibility = "hidden";
        resultContainer.style.visibility = "hidden"
    } else {
        pUser.innerHTML = `Too bad, you lose the game ${playerScore} to ${computerScore} !`;
        choiceButton.forEach(possibilities => {
            possibilities.removeEventListener('click', playRound);
        })
        pComputer.style.visibility = "hidden";
        resultContainer.style.visibility = "hidden"
    }
}
