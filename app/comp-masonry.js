import Masonry from 'masonry-layout';

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

