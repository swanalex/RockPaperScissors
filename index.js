// function to randomly select a choice for the 'computer'
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;


// this is where the game is played. able to adjust number of wins it takes to win the match.
function playRound(playerSelection, computerSelection) {
    if ( (playerSelection === 'Rock' && computerSelection === "Scissors") || (playerSelection === 'Paper' && computerSelection === "Rock") 
    || (playerSelection === 'Scissors' && computerSelection === "Paper") ) {
        displayPlayerImage(playerSelection);
        displayComputerImage(computerSelection);
        setTimeout( () => removeImages(), 2000);
        playerWinCount += 1;
        playerWins.textContent = playerWinCount;
        if (playerWinCount === 5) {
            setTimeout( () => displayWinMsg(), 2250);
            setTimeout(resetGame, 5000);
        }
    } else if (playerSelection === computerSelection) {
        displayPlayerImage(playerSelection);
        displayComputerImage(computerSelection);
        setTimeout( () => removeImages(), 2000);
        drawCount += 1;
        draws.textContent = drawCount;
    } else {
        displayPlayerImage(playerSelection);
        displayComputerImage(computerSelection);
        setTimeout( () => removeImages(), 2000);
        computerWinCount += 1;
        computerWins.textContent = computerWinCount;
        if (computerWinCount === 5) {
            setTimeout( () => displayWinMsg(), 2250);
            setTimeout(resetGame, 5000);
        }
    };
};

// displays the image of player's choice, as well as the VS letters
function displayPlayerImage(playerChoice) {
    const image = document.createElement('img');
        image.className = 'playerMove';
        image.style.height = '200px';
        image.style.width = '200px';
        image.style.position = 'relative';
        image.style.left = '575px';
    const vs = document.createElement('span');
        vs.className = 'vsImage';
        vs.textContent = 'VS';
        vs.style.fontSize = '100px';
        vs.style.fontFamily = 'Audiowide';
        vs.style.color = 'hotpink';
        vs.style.position = 'relative';
        vs.style.left = '650px';
        vs.style.bottom = '50px';
    if (playerChoice === 'Rock') {
        image.src = 'images/rockLeft.png';
    } else if (playerChoice === 'Paper') {
        image.src = 'images/paperLeft.png';
    } else {
        image.src = 'images/scissorsLeft.png';
    }
    const ele = document.querySelector('.space1');
    ele.appendChild(image);
    ele.appendChild(vs);
    disable();
}

// displays the image of what the computer choice is
function displayComputerImage(computerChoice) {
    const image = document.createElement('img');
        image.className = 'computerMove';
        image.style.height = '200px';
        image.style.width = '200px';
        image.style.position = 'relative';
        image.style.left = '725px';
    if (computerChoice === 'Rock') {
        image.src = 'images/rockRight.png';
    } else if (computerChoice === 'Paper') {
        image.src = 'images/paperRight.png';
    } else {
        image.src = 'images/scissorsRight.png';
    }
    const ele = document.querySelector('.space1');
    ele.appendChild(image);
}

// removes the battle images from the screen
function removeImages() {
    const computerMove = document.querySelector('.computerMove');
    const playerMove = document.querySelector('.playerMove');
    const vsImage = document.querySelector('.vsImage');
    computerMove.remove();
    playerMove.remove();
    vsImage.remove();
    restore();
}

// disables the functionality of clicking the buttons, preventing you from causing multiple
    // images to clutter the screen
function disable() {
    rockButton.setAttribute('disabled', 'disabled');
    paperButton.setAttribute('disabled', 'disabled');
    scissorsButton.setAttribute('disabled', 'disabled');
}

// restores the functionality of the clickable buttons, allowing you to continue the game
function restore() {
    rockButton.removeAttribute('disabled');
    paperButton.removeAttribute('disabled');
    scissorsButton.removeAttribute('disabled');
}

// dislays either 'congratulations' if you win or 'defeat' if you lose the match
function displayWinMsg() {
    const Msg = document.createElement('div');
    Msg.className = 'Msg';
    Msg.style.color = "hotpink";
    Msg.style.fontSize = '100px';
    Msg.style.fontFamily = 'Audiowide';
    Msg.style.position = 'relative';
    Msg.style.left = '700px';
    if (playerWinCount > computerWinCount) {
        Msg.textContent = 'CONGRATULATIONS!!!';
        Msg.style.left = '400px';
    } else {
        Msg.textContent = 'DEFEAT...'
    }
    const ele = document.querySelector('.space1');
    ele.appendChild(Msg);
}

// removes the game ending message
function removeWinMsg() {
    const toDelete = document.querySelector('.Msg');
    toDelete.remove();
}

// resets the scores to zero and clears the screen
function resetGame() {
    playerWinCount = 0;
    computerWinCount = 0;
    drawCount = 0;
    playerWins.textContent = playerWinCount;
    computerWins.textContent = computerWinCount;
    draws.textContent = drawCount;
    removeWinMsg();
}


const playerWins = document.querySelector('.playerWinText');
const computerWins = document.querySelector('.computerWinText');
const draws = document.querySelector('.drawText');


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('.reset');


rockButton.onclick = () => playRound('Rock', getComputerChoice());
paperButton.onclick = () => playRound('Paper', getComputerChoice());
scissorsButton.onclick = () => playRound('Scissors', getComputerChoice());
resetButton.onclick = function() {
    resetGame();
}
