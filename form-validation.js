  
var validationflag=true;

const form = document.getElementById('form1');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

//document.getElementById("sub").addEventListener("click", function(event){

	$("#sub").click(function (e) {
		var fullname=$('#fullname').val();
		if(){
$('#fullname').html('Enter your fullname.');
$('#fullname').show();
validationflag=false;
		}else{

		}

	});

// var test = document.getElementById("sub");
// if(test){
// 	test.addEventListener("click", function(event){
// 		event.preventDefault();
	
// 		checkInputs();
// });

// }

//form.addEventListener('submit', e => {
	

function checkInputs() {
	// trim to remove the whitespaces
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	//const password2Value = password2.value.trim();
	
	if(nameValue === '') {
		setErrorFor(name, 'Username cannot be blank');
	} else {
		setSuccessFor(name);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	// if(password2Value === '') {
	// 	setErrorFor(password2, 'Password2 cannot be blank');
	// } else if(passwordValue !== password2Value) {
	// 	setErrorFor(password2, 'Passwords does not match');
	// } else{
	// 	setSuccessFor(password2);
	// }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');


// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });



