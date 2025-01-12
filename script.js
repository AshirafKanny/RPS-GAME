let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let chozen = document.getElementById('chozen');
let computerChoice = document.getElementById('computer-choice')

rock.addEventListener('click', () =>{
    chozen.textContent = 'You choze Rock';
    computerChoice.textContent = 'computer choice'
})
