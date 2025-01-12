let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let chozen = document.getElementById('chozen');
let computerChoice = document.getElementById('computer-choice')
let outcome = document.getElementById('outcome')

let humanScore = document.getElementById('human-score')
let computerScore = document.getElementById('computer-score')

let reset = document.getElementById('reset')


let humanChoice;
let choiceComputer

rock.addEventListener('click', () =>{
    humanChoice = 'rock'
    chozen.textContent = `You chose ${humanChoice}`;
    computerChoice.textContent = computerPlay()
    outcome.textContent = compare(humanChoice, choiceComputer, humanScore, computerScore)
}) 

paper.addEventListener('click', () => {
    humanChoice = 'paper'
    chozen.textContent = `You chose ${humanChoice}`;
    computerChoice.textContent = computerPlay()
    outcome.textContent = compare(humanChoice, choiceComputer, humanScore, computerScore)
})

scissors.addEventListener('click',()=>{
    humanChoice = 'scissors'
    chozen.textContent = `You chose ${humanChoice}`;
    computerChoice.textContent = computerPlay()
    outcome.textContent = compare(humanChoice, choiceComputer, humanScore, computerScore)
})




function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    choiceComputer = choices[random]
    return `Computer chose ${choiceComputer}`
}

function compare(humanChoice, computerChoice, humanScore, computerScore){
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
          humanScore.textContent = parseInt(humanScore.textContent) + 1     
        return 'You win'

     
        
    }else if(humanChoice === 'rock' && computerChoice === 'paper'){   
        computerScore.textContent = parseInt(computerScore.textContent) + 1
        return 'You lose'

       
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore.textContent = parseInt(humanScore.textContent) + 1
        return 'You win'
     
        

    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore.textContent = parseInt(computerScore.textContent) + 1
        return 'You lose'
       
    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore.textContent = parseInt(humanScore.textContent) + 1
        return 'You win'
     
    }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore.textContent = parseInt(computerScore.textContent) + 1
        return 'You lose'
      
    }else if(humanChoice === computerChoice){
        return 'Draw'
     
    }
}


reset.addEventListener('click', () =>{
    resetGame()

})


function resetGame(){
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    chozen.textContent = '';
    computerChoice.textContent = '';
    outcome.textContent = '';
}