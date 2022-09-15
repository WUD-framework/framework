const mySlides = document.getElementsByClassName('mySlides');
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n > mySlides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = mySlides.length};
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = 'none'; 
    }
    mySlides[slideIndex-1].style.display = 'block';
}