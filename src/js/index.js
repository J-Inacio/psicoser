if (module.hot) {
	module.hot.accept();
}

import "../styles/base/reset.css";
import "../styles/base/variables.css";
import "../styles/base/typography.css";
import "../styles/main.css";

const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".mobile-sidebar");
const closeSidebarBtn = document.querySelector('.x-icon')
const linksMenu = document.querySelectorAll('.mobile-links > li')


linksMenu.forEach(link => {
	link.addEventListener("click", () => {
		sidebar.classList.remove('open')
	})
})

closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('open')
})

menuBtn.addEventListener("click", () => {
	sidebar.classList.add('open')
});

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
