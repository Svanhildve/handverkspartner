const slideTags = document.querySelectorAll(".projects section")

let currentSlide = 0

console.log("currentSlide")

const nextSlide = function(){

	if (currentSlide < slideTags.length - 1) {
		slideTags[currentSlide].classList.remove("active")
		currentSlide = currentSlide + 1
	} else {
		currentSlide = currentSlide
	}
}

const prevSlide = function(){

	if (currentSlide > 0) {
		slideTags[currentSlide - 1].classList.add("active")
		currentSlide = currentSlide - 1
	} else {
		currentSlide = currentSlide
	}
}

// on click, change the slide
document.querySelector(".linkNext").addEventListener("click", function(){

	nextSlide()
	
})

document.querySelector(".linkPrev").addEventListener("click", function(){

	prevSlide()
	
})