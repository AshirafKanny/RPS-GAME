let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let chozen = document.getElementById('chozen');

rock.addEventListener('click', () =>{
    chozen.textContent = 'You choze Rock';
})
