function bgColor(element, color) {
	let tag = document.querySelector(element);
	tag.style.background = color;
}

let userElement = prompt('Enter the name of element to change its color');
let userColor = prompt('Enter the color');

bgColor(userElement, userColor);