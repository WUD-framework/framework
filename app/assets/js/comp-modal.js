
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
const Btn1 = document.getElementsByClassName('button-close')[0];
const Btn2 = document.getElementsByClassName('button-close')[1];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
window.addEventListener('click', buttonClick);


function openModal() {
  modal.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
}


function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function buttonClick(e) {
  if (e.target == Btn1 || e.target == Btn2) {
    modal.style.display = 'none';
  }
}

window.addEventListener('keyup', escapeClose);
function escapeClose(e) {
    if (e.keyCode === 27) {
        modal.style.display = 'none';
    }
}