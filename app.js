
const TOTAL_IMAGES = 15;
const TOTAL_IMAGE_EL = 12;
const RANDOM_TIME = 5000;
const numberImgArr = [...Array(TOTAL_IMAGES).keys()].map(i => i + 1);

const imagesEl = document.querySelectorAll('.grid-img');

let isAnimate = true;

function randomIndex(num) {
	return Math.floor(Math.random() * num);
}

function shuffle(arr) {
	let counter = arr.length;
	let temp, index;

	while (counter > 0) {
		index = randomIndex(counter);
		counter--;

		temp = arr[counter];
		arr[counter] = arr[index];
		arr[index] = temp;
	}

	return arr;
}

function changeImgSrc(el, srcImg) {
	el.src = `./img/${srcImg}.jpeg`;
}

function generateGallery() {
	shuffleArr = shuffle(numberImgArr);

	imagesEl.forEach((imagesEl, index) => {
		changeImgSrc(imagesEl, shuffleArr[index]);
		imagesEl.classList.add('loaded');
		imagesEl.style.transitionDelay = `${Math.floor(Math.random() * 400)}ms`;
	});
}

function randomImage() {
	const index = randomIndex(TOTAL_IMAGE_EL);

	let isTransitionRemoved = true;

	imagesEl[index].classList.remove('loaded');

	imagesEl[index].addEventListener('transitionend', () => {
		if (isTransitionRemoved) {
			changeImgSrc(imagesEl[index], shuffle(numberImgArr)[index]);
			imagesEl[index].classList.add('loaded');

			isTransitionRemoved = false;
		}
	})
}

// TODO: Generate div by js

generateGallery();

setInterval(() => {
	randomImage();
}, RANDOM_TIME);