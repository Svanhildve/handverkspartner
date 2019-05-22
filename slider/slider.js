const slideTags = document.querySelectorAll(".projects section")
const paginationTags = document.querySelectorAll(".pagination .pagination__link")

let currentSlide = 0

const nextSlide = function(){

	if (currentSlide < slideTags.length - 1) {
		
		removeActiveClass()

		currentSlide = currentSlide + 1

		addActiveClass()
		
		
	} else {
		currentSlide = currentSlide
	}
}

const prevSlide = function(){

	if (currentSlide > 0) {

		removeActiveClass()

		currentSlide = currentSlide - 1

		addActiveClass()
		
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

const addActiveClass = function(){
	slideTags[currentSlide].classList.add("active")
	paginationTags[currentSlide].classList.add("active")
}

const removeActiveClass = function(){
	slideTags[currentSlide].classList.remove("active")
	paginationTags[currentSlide].classList.remove("active")
}


// scroll

function debounced(delay, fn) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}

const myHandler = (event) => { 
	if (event.deltaY < 0) {
		console.log('scrolling up')
		prevSlide()
	} 
	if (event.deltaY > 0) {
		console.log('scrolling down')
		nextSlide() 
	}
} // do something with the event

const dHandler = debounced(50, myHandler);
document.addEventListener("wheel", dHandler);


// pagination



paginationTags[0].addEventListener("click", function() {

	removeActiveClass()

	currentSlide = 0

	addActiveClass()
	
})

paginationTags[1].addEventListener("click", function() {

	removeActiveClass()

	currentSlide = 1

	addActiveClass()
	
})

paginationTags[2].addEventListener("click", function() {

	removeActiveClass()

	currentSlide = 2

	addActiveClass()
	
})


// const goToSlide = function(slide){

// // plz go to slide things here 

// }
// ​
// paginationTags.forEach(function(tag) {
//   tag.addEventListener("click", function() {

//     goToSlide()

//   });
// });