let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let chozen = document.getElementById('chozen');
let computerChoice = document.getElementById('computer-choice')

let humanChoice;
rock.addEventListener('click', () =>{
    humanChoice = 'rock'
    chozen.textContent = `You chose ${humanChoice}`;
    computerChoice.textContent = computerPlay()
}) 

paper.addEventListener('click', () => {
    humanChoice = 'paper'
    chozen.textContent = `You Choze ${humanChoice}`;
    computerChoice.textContent = computerPlay()
})

scissors.addEventListener('click',()=>{
    humanChoice = 'scissors'
    chozen.textContent = `You Choze ${humanChoice}`;
    computerChoice.textContent = computerPlay()
})




function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let choiceComputer = choices[random]
    return `Computer choze ${choiceComputer}`
}