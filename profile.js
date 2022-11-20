let sportBtn = document.querySelector('#sport');
let gameBtn = document.querySelector('#game');
let otherBtn = document.querySelector('#other');

function sport(){
    alert('My favorite sport is Tennis.')
    sportBtn.style.background='yellow';
}
sportBtn.addEventListener('click',sport )
function game(){
    alert('My favorite game is Warzone.')
    gameBtn.style.background='yellow';
}
gameBtn.addEventListener('click',game)
function other(){
    alert('My favorite thing to do  is hike.')
    otherBtn.style.background='yellow';
}
otherBtn.addEventListener('click',other)