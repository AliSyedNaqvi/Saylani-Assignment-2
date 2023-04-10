function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
	return JSON.parse(localStorage.getItem(key));
}

let n = +prompt('How many objects you want to store');

for(let i = 1; i <= n; i++) {
	let key = prompt(`Enter the name of key for object ${i}`)

	let object = {
		name: prompt(`Enter the name of object ${i}`),
		id: +prompt(`Enter the id of object ${i}`),
		about: prompt(`What is object ${i} about`)
	};

	const retrievedObject = save(key, object);
	console.log(retrievedObject);
}