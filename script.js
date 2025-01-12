let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let chozen = document.getElementById('chozen');
let computerChoice = document.getElementById('computer-choice')
let outcome = document.getElementById('outcome')

let humanChoice;
let choiceComputer

rock.addEventListener('click', () =>{
    humanChoice = 'rock'
    chozen.textContent = `You chose ${humanChoice}`;
    computerChoice.textContent = computerPlay()
    outcome.textContent = compare(humanChoice, computerChoice)
}) 

paper.addEventListener('click', () => {
    humanChoice = 'paper'
    chozen.textContent = `You Choze ${humanChoice}`;
    computerChoice.textContent = computerPlay()
    outcome.textContent = compare(humanChoice, computerChoice)
})

scissors.addEventListener('click',()=>{
    humanChoice = 'scissors'
    chozen.textContent = `You Choze ${humanChoice}`;
    computerChoice.textContent = computerPlay()
    outcome.textContent = compare(humanChoice, computerChoice)
})




function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    computerChoice = choices[random]
    return `Computer choze ${computerChoice}`
}

function compare(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
           console.log('You win');
        return 'You win'
     
        
    }else if(humanChoice === 'rock' && computerChoice === 'paper'){
         console.log('You lose');
        return 'You lose'
       
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
           console.log('You win');
        return 'You win'
     
        

    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
         console.log('You lose');
        return 'You lose'
       
    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
           console.log('You win');
        return 'You win'
     
    }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
          console.log('You lose');
        return 'You lose'
      
    }else if(humanChoice === computerChoice){
           console.log('Draw');
        return 'Draw'
     
    }
}
