let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let chozen = document.getElementById('chozen');
let computerChoice = document.getElementById('computer-choice')

rock.addEventListener('click', () =>{
    chozen.textContent = 'You choze Rock';
    computerChoice.textContent = 'computer choice'
}) 

paper.addEventListener('click', () => {
    chozen.textContent = 'You choose Paper';
    computerChoice.textContent = 'computer choice'
})

scissors.addEventListener('click',()=>{
    chozen.textContent = 'You choose Scissors'
    computerChoice.textContent = 'computer choice'
})