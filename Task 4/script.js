function list(str) {
	let ul = document.querySelector('ul');
	let newList = '';
	
	newList += '<li>' + str + '</li>';

	ul.innerHTML += newList;
}

let n = +prompt('Enter how many list items to add.');

for(let i = 0; i < n; i++) {
	let user = prompt('Enter a string to enter in list');
	list(user);
}