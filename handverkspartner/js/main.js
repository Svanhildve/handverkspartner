
// // left: 37, up: 38, right: 39, down: 40,
// // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//       e.preventDefault();
//   e.returnValue = false;
// }

// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }

// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }

// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }



// https://2018inmusic.jamiehunter.design/


// when we scroll the page, make things parallax
// we want to move certain tags based on how far they are from an anchor point
// what is the anchor point? well, it's the middle of the section
// how far should we parallax? Well, it's a ratio of the middle distance scrolled to the middle point of the anchor

const aboutOfferingsTag = document.querySelector(".about__offerings")

document.addEventListener("scroll", function() {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  const topSection = aboutOfferingsTag.offsetTop
  const midSection = topSection + (aboutOfferingsTag.offsetHeight / 2)

  const distanceToSection = midViewport - midSection
  
  const treePatternTag = document.querySelector(".tree-pattern")

  treePatternTag.style.transform = `translate(0, ${distanceToSection * 0.4}px)`
})