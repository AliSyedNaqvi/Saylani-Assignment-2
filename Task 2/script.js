let array = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Java', 'C++'];

let input = prompt('Enter word to find in the array (HTML, CSS, JavaScript, PHP, Python, Java, C++)');

function recursion(arr, inp, i = 0) {
	if(inp === arr[i]) {
		return true;
	} else if(i >= arr.length) {
		return false;
	} else {
		return recursion(arr, inp, i + 1);
	}
}

let result = recursion(array, input);
console.log(result);