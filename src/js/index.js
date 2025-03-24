import "../styles/base/reset.css";
import "../styles/base/variables.css";
import "../styles/base/typography.css";
import "../styles/main.css";

import { openMenu, closeMenu } from "./modules/menu.js";
import { showImage, nextImage, startAutoSlide } from "./modules/carousel.js";

document.addEventListener("DOMContentLoaded", () => {
	startAutoSlide();
});
