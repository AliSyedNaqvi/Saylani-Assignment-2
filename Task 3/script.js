function newPara(str) {
	let body = document.querySelector('body');
	body.innerHTML = '<p>' + str + '</p>';
}

let user = prompt('Enter a string to add in the HTML document');
newPara(user);