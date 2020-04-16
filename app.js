
const TOTAL_IMAGES = 15;
const RANDOM_TIME = 5000;
const numberArr = [...Array(TOTAL_IMAGES).keys()].map(i => i + 1);

const imagesEl = document.querySelectorAll('.grid-img');

function shuffle(arr) {
	let counter = arr.length;
	let temp, index;

	while (counter > 0) {
		index = Math.floor((Math.random() * counter));
		counter--;

		temp = arr[counter];
		arr[counter] = arr[index];
		arr[index] = temp;
	}

	return arr;
}


function renderImage() {
	shuffleArr = shuffle(numberArr);

	imagesEl.forEach((imagesEl, index) => {
		imagesEl.classList.add('loaded');
		imagesEl.style.transitionDelay = `${Math.floor(Math.random() * 550)}ms`;

		imagesEl.src = `./img/${shuffleArr[index]}.jpeg`;
	});
}

renderImage();

// setInterval(() => {
// 	renderImage();
// }, RANDOM_TIME);