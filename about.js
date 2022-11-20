console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}

//part 2
let form = document.querySelector('#contact');
function compete(){
	alert('Its been completed')
}
form.addEventListener('submit', compete);


function ducky(){
	alert('You are doing great');
}
let duck = document.querySelector('#duck');
duck.addEventListener('mouseover',ducky )