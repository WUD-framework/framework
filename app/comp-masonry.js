// import Masonry from 'masonry-layout';

// window.onload = () => {
//     const grid = document.querySelector('.masonry');

//     const masonry = new Masonry(grid);
// }

var elem = document.querySelector('.masonry-grid');
var msnry = new Masonry( elem, {
  // options
    itemSelector: '.masonry-grid-item',
    columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.masonry-grid', {
    // options
});





// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  console.log("klick klick");
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
