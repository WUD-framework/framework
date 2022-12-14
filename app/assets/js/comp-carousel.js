const slideshowContainer = document.getElementById('slideshow-container');
const mySlides = document.getElementsByClassName('mySlides');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const pag = document.getElementById('carousel-pag');

//Create indicator dynamically
function createPag() {
    for (let i = 0; i < mySlides.length; i++) {
        const liTag = document.createElement('li');
        liTag.classList.add("liPag")
        pag.appendChild(liTag)
    }
}
createPag()

// Slideindex börjar på 1. Börja alltså med att visa slide 1
let slideIndex = 0;
showSlides(slideIndex);

// För varje piltryck += n (tex lägg till 1 om vi lägger in 1 och ta bort 1 om vi lägger till -1)
function nextSlide(n) {
    showSlides(slideIndex += n);
    // console.log('n', n, 'slideIndex', slideIndex, 'result', slideIndex + n -1)
}


//Eventlyssnare för knapparna. Skicka in om 1 skall läggas till eller tas bort. 
next.addEventListener('click', function (e) {
    e.preventDefault();
    nextSlide(1);
})
prev.addEventListener('click', function (e) {
    e.preventDefault();
    nextSlide(-1);
})

//Automatic slideshow
// let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
    //Get the indicator
    let dots = document.getElementsByClassName("liPag");
    // console.log('dots', dots)

    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > mySlides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }

    mySlides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

}

function showSlides(n) {

    let dots = document.getElementsByClassName("liPag");
    // console.log(dots)

    // Om siffran som räknas är större än antalet slides så skall räkningen börjar om från slide 1 igen
    if (n > mySlides.length) {
        slideIndex = 1
    };

    // Om siffran som räknas är mindre än 1 skall slide 3 visas. Man går alltså från slide 1 till 3 när man trycke rpå prev-pilen
    if (n < 1) {
        slideIndex = mySlides.length
    };

    // För varje slide, display = none
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }

    //Display block för den slide vars index är aktuellt (minus 1, pga att räkningen börjar med noll per auto?)
    mySlides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

}

//Found this online. 

//https://gist.github.com/ncou/3a0a1f89c8e22416d0d607f621a948a9

function RecurringTimer(callback, delay) {
    var timerId, start, remaining = delay;

    slideshowContainer.addEventListener('mouseenter', () => {
        pause()
    })

    slideshowContainer.addEventListener('mouseleave', () => {
        resume()
    })

    this.pause = function () {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    var resume = function () {
        start = new Date();
        timerId = window.setTimeout(function () {
            remaining = delay;
            resume();
            callback();
        }, remaining);
    };

    this.resume = resume;

    this.resume();
}

RecurringTimer(showSlidesAuto, 2000)