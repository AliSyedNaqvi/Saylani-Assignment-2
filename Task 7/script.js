function retrieve(key) {
	let item = localStorage.getItem(key);
	if(item) {
		return JSON.parse(item);
	}
	return null;
}

let user = prompt('Enter the object to get from local storage');

const object = retrieve(user);

if(object) {
	console.log(object)
} else {
	console.log('Object not found');
}