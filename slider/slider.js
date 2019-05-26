const slideTags = document.querySelectorAll(".projects section")
const paging = document.querySelector(".pagination");

let count = 0;
paging.firstElementChild.id = 1;

//foreach slide in projects section
slideTags.forEach(function(element){
	//increase count by one
	count++
	//ignore first button as it already exists 
	if (count > 1){
		//dynamically create new paging link foreach slide 
		let pagerBtn = document.createElement('a')
		pagerBtn.href = "#";
		pagerBtn.id = count;
		pagerBtn.classList.add('pagination__link');
		//dynamically create spans inside each link
		let pagerSpan = document.createElement('span');
		pagerSpan.innerHTML = "Side " + count;
		pagerSpan.classList.add('sr-only');
		//append <a> and <span> elements
		paging.appendChild(pagerBtn);
		pagerBtn.appendChild(pagerSpan);
	}
})

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
		
		prevSlide()

	} 
	if (event.deltaY > 0) {
		
		nextSlide() 

	}
} // do something with the event

const dHandler = debounced(50, myHandler);
document.addEventListener("wheel", dHandler);

paginationTags.forEach(function(tag) {
	tag.addEventListener("click", function() {
	  //pass clicked element to goToSlide function
	  goToSlide(tag)
	});
  });

const goToSlide = function(tag){
	removeActiveClass();
	//subtract 1 from id because currentSlide starts at 0 but tag ids start at 1
	currentSlide = tag.id - 1;
	addActiveClass();
}