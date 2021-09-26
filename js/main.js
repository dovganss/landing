////////slider

const btnRight = document.querySelector(".arrow_right");
const btnLeft = document.querySelector(".arrow_left");
const slides = document.querySelectorAll(".slider__item");

let i = 0;
 
btnRight.addEventListener("click", e => {
  e.preventDefault();
    ++i
    if (i >= slides.length) {
        slides[i-1].classList.remove("slider__item--active");
        i = 0;
        slides[i].classList.add("slider__item--active");
    } else { 
        slides[i-1].classList.remove("slider__item--active");
        slides[i].classList.add("slider__item--active");
    }
})

let y = 0;
btnLeft.addEventListener("click", e => {
  e.preventDefault();
    ++y
    if (y >= slides.length) {
        slides[y-1].classList.remove("slider__item--active");
        y = 0;
        slides[y].classList.add("slider__item--active");
    } else { 
        slides[y-1].classList.remove("slider__item--active");
        slides[y].classList.add("slider__item--active");
    }
})

////валидация формы

const form = document.querySelector('.form');
const validateBtn = form.querySelector('.button');
const input = form.querySelectorAll('.form__input');

form.addEventListener('submit', function () {
  event.preventDefault()
  const errors = form.querySelectorAll('.error--active')
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
  
for (var i = 0; i < input.length; i++) {
  if (!input[i].value) {
    console.log('input is blank', input[i]);
    const error = document.createElement('div');
    error.className='error--active';
    error.innerHTML = 'Error text';
    form[i].parentElement.insertBefore(error, input[i]);
  }
}
})

///меню

var linkNav = document.querySelectorAll('[href^="#"]'), 
    V = 1;  
for (var u = 0; u < linkNav.length; u++) {
    linkNav[u].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step);  
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);
}