//your JS code here. If required.
let username = document.getElementById('username');
let password = document.getElementById('password');
let submitBtn = document.getElementById('submit');
let checkBox = document.getElementById('checkbox');

var data = localStorage.getItem("myKey");
if (data !== null) {
	let btn = document.createElement('button');
}

submitBtn.addEventListener('click',(event)=>{
	event.preventDefault();
	if (username.value === "" || password.value === "") {
		return;
	}
	let user = {
		name:username,
		pass:password,
	}
	if (checkBox.checked) {
		localStorage.setItem('test',JSON.stringify(user));
	}
	alert(`Logged in as ${username.value}`);
});
		



