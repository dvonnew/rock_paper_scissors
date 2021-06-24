
let choices = ['rock', 'paper','scissors']

function computerPlay(choices){

    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
    
}

function playRound(computerSelection, playerSelction){

    if (playerSelction === computerSelection) {
        console.log(`It's a tie!`)
    }
    else if (playerSelction.toLowerCase() === 'rock' && computerSelection === 'paper'){
        console.log('Paper beats rock! You lose.')
        return computerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        console.log('Rock beats Scissors! You win.')
        return playerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        console.log('Rock beats scissors! You lose.')
        return computerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        console.log('Scissors beats paper! You win.')
        return playerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        console.log('Scissors beats paper! You lose.')
        return computerScore +=1
    }
    else if (playerSelction.toLowerCase() === 'paper' && computerSelection === 'rock'){
        console.log('Paper beats rock! You win.')
        return playerScore +=1
    }
}

// playRound(computerPlay(choices), playerSelction='rock')

function game(){
    
    let roundsPlayed = 0
    computerScore = 0
    playerScore = 0

    while (roundsPlayed < 5){
        let playerSelction = prompt(`Rock? Paper? Or Scissors`)
        playRound(computerPlay(choices), playerSelction)
        roundsPlayed++

    }
    if (playerScore > computerScore){
        console.log(`You won ${playerScore} to ${computerScore}`)
    }
    else if (computerScore > playerScore){
        console.log(`You lost ${computerScore} to ${playerScore}`)
    }

    else{
        console.log(`It's a tie ${playerScore} to ${computerScore}`)
    }

}

game()
