const openbtn = document.querySelector('#open');
const modalBox = document.querySelector('#modal-box');
const closebtn = document.querySelector('#close');

openbtn.addEventListener('click', () => {
    modalBox.classList.add('active');
});

closebtn.addEventListener('click', () => {
    modalBox.classList.remove('active');
});