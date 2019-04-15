// WILLIAM GIBSON

// Offscreen navigation
var menuToggle = document.querySelector('.menu-toggle')
var bodyClass = document.querySelector('body').classList
var closeMenu  = document.querySelector('.closebtn')

menuToggle.addEventListener('click', function() {
  bodyClass.toggle('nav-active')
})
closeMenu.addEventListener('click', function() {
  bodyClass.toggle('nav-active')
})

var slideIndex = 1;
showDivs(slideIndex);

function plusSlides(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("sliderImg");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    if (i === 0) {
      x[i].style.transform = "translateX(100vw)"; 
      x[slideIndex-1].style.zIndex = "0"; 
    } else {
      x[i].style.transform = "translateX(-100vw)"; 
      x[slideIndex-1].style.zIndex = "0"; 
    }
  }
  x[slideIndex-1].style.transform = "translateX(0)"; 
  x[slideIndex-1].style.zIndex = "1"; 
}

function sliderMove() {
  var elem = document.getElementsByClassName("sliderImg"); 
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px';
    }
  }
}



var autoSlide = setInterval(function(){plusSlides(1)}, 2000)