const mySlides = document.getElementsByClassName('mySlides');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n, e) {
    if (n > mySlides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = mySlides.length};
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = 'none'; 
    }
    mySlides[slideIndex-1].style.display = 'block';
    console.log('slideIndex', slideIndex)
    console.log('mySlides', mySlides[slideIndex-1])
    console.log('n', n)
}

next.addEventListener('click', function(e) {
    e.preventDefault();
    nextSlide(1);
})
prev.addEventListener('click', function(e){
    e.preventDefault();
    nextSlide(-1);
})