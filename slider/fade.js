const headerTag = document.querySelector("header")


// Fade in header on load



// Fade out header on scroll

const fadeIn = function() {
	headerTag.style.opacity = 1
	headerTag.style.transform = "translateY(0px)"
}

fadeIn()

window.addEventListener("scroll", function(header) {
	const pixels = window.pageYOffset

	if (10 <= pixels) {
		headerTag.classList.add("fadeonscroll")
	} else {
		headerTag.classList.remove("fadeonscroll")
	}
})