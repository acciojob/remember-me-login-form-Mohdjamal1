//your JS code here. If required.
let username = document.getElementById('username');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submit');
let checkBox = document.getElementById('checkbox');

submitBtn.addEventListener('click',(event)=>{
	event.preventDefault();
	if (username.value === "" || password.value === "") {
		return;
	}
	let user = {
		name:username.value,
		pass:password.value,
	}
	if (checkBox.checked) {
		localStorage.setItem('test',JSON.stringify(user));
	}
	alert(`Logged in as ${username.value}`);
});
		
var data = localStorage.getItem('test');
if (data !== null) {
	let span = document.createElement('span');
	span.innerHTML = `<button id='existing' >Login as existing user</button>`;
	document.querySelector('form').appendChild(span);
	document.getElementById('existing').addEventListener('click',()=>{
		let existname = JSON.parse(data);
		alert(`Logged in as ${existname.name}`);
	})
}


