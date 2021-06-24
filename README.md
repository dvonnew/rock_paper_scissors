# rock_paper_scissors

1. ComputerPlay
    - From a selction of rock, paper or scissors generate a random output
    - Set this output to a var - computerSelection
    - return this output
2. Player Round
    - Two parameters
        - playerSelection
        - computerSelection
    - Check the values against one another
        - if playerSelection === computerSelection
            - return "It's a tie!"
        - else if playerSelection === 'rock' and computerSelection==='paper'
            - return computerScore += 1
            - console.log "You lose! Paper beats Rock!"
        - else if playerSelection === 'rock' and computerSelection==='scissor'
            - return playerScore +=1
            - console.log "You win! Rock beat Scissors
        - else if playerSelection === 'paper' and computerSelection==='scissor'
            - return computerScore += 1
            - console.log "You lose! Scissors beats Paper"
        - else if playerSelection === 'paper' and computerSelection==='rock'
            - return playerScore +=1
            - console.log "You win! Paper beats Rock"
        - else if playerSelection === 'scissor' and computerSelection==='rock'
            - return computerScore += 1
            - console.log "You lose! Rock beats Scissors"
        - else if playerSelection === 'scissor' and computerSelection==='paper'
            - return playerScore +=1
            - console.log "You win! Scissor beats Rock"
    - return playerScore, computerScore      
4. Game Function
    - create a roundCount var = 0
    - while roundCount <= 5
        - playerSelection = Prompt for player input (rock, paper, scissor)
            - convert string to islower
        - playRound(playerSelection, computerSelection)
        - roundCount +=1
    