let computerScore = 0; // x
let playerScore = 0; // y
let drawScore = 0; //z
let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
let draws = document.getElementById('draws');

function computerPlay(){
    
    const choices = ['rock', 'paper','scissors']
    const computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
    
}

function displayScore(x, y, z) {

    wins.innerText = `Wins: ${x}`;
    losses.innerText = `Losses: ${y}`;
    draws.innerText = `Draws: ${z}`;

    console.log(x)
    console.log(y)
    console.log(z)
}

function playRound(val, computerSelection){

    const playerSelction = val;

    if (playerSelction === computerSelection) {
        display.innerText = `It's a tie!`;
        drawScore +=1
    }
    else if (playerSelction.toLowerCase() === 'rock' && computerSelection === 'paper'){
        display.innerText = 'Paper beats rock! You lose.';
        computerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        display.innerText = 'Rock beats Scissors! You win.';
        playerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        display.innerText = 'Rock beats scissors! You lose.';
        computerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        display.innerText = 'Scissors beats paper! You win.';
        playerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        display.innerText = 'Scissors beats paper! You lose.';
        computerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'paper' && computerSelection === 'rock'){
        display.innerText = 'Paper beats rock! You win.';
        playerScore +=1
    }
    displayScore(playerScore, computerScore, drawScore)

}

const scoreContainer = document.querySelector('.scoreBoard');
const display = document.createElement('p');
scoreContainer.append(display)

const buttons = document.querySelectorAll(`button`);
buttons.forEach(button => button.addEventListener('clich', () => removeP));
buttons.forEach(button => button.addEventListener('click', () =>{
    
    playRound(button.id, computerPlay())

}));

