const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let index = 0;
let interval;


function showImage(i) {
	if (i < 0) {
		index = images.length - 1;
	} else if (i >= images.length) {
		index = 0;
	} else {
		index = i;
	}
	carousel.style.transform = `translateX(-${index * 100}%)`;
}


function nextImage() {
	showImage(index + 1);
}


function startAutoSlide() {
	clearInterval(interval);
	interval = setInterval(nextImage, 5000);
}


prevButton.addEventListener("click", () => {
	showImage(index - 1);
	startAutoSlide();
});

nextButton.addEventListener("click", () => {
	showImage(index + 1);
	startAutoSlide();
});


startAutoSlide();


export { showImage, nextImage, startAutoSlide };