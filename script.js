let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let chozen = document.getElementById('chozen');
let computerChoice = document.getElementById('computer-choice')

rock.addEventListener('click', () =>{
    let humanChoice = 'rock'
    chozen.textContent = 'You choze Rock';
    computerChoice.textContent = computerPlay()
}) 

paper.addEventListener('click', () => {
    chozen.textContent = 'You choose Paper';
    computerChoice.textContent = computerPlay()
})

scissors.addEventListener('click',()=>{
    chozen.textContent = 'You choose Scissors'
    computerChoice.textContent = computerPlay()
})




function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let choiceComputer = choices[random]
    return `Computer choze ${choiceComputer}`
}