const slideTags = document.querySelectorAll(".projects section")
const paginationTags = document.querySelectorAll(".pagination .pagination__link")

let currentSlide = 0




const nextSlide = function(){

	if (currentSlide < slideTags.length - 1) {
		slideTags[currentSlide].classList.remove("active")
		currentSlide = currentSlide + 1
		slideTags[currentSlide].classList.add("active")
	} else {
		currentSlide = currentSlide
	}
}

const prevSlide = function(){

	if (currentSlide > 0) {
		slideTags[currentSlide].classList.remove("active")
		currentSlide = currentSlide - 1
		slideTags[currentSlide].classList.add("active")
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


// pagination



