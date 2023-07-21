// window.onload = alert('안녕하세요!');

const btn = document.querySelectorAll('button');

btn[0].onclick = () => document.body.style.backgroundColor = 'green';

btn[1].onclick = () => document.body.style.backgroundColor = 'white';


const body = document.body;
const result = document.querySelector('#result');

/* body.onkeydown = (event) => {
    result.innerText = `code : ${event.code},\nkey : ${event.key}`;
} */

body.addEventListener('keydown', (event) => {
    result.innerText = `code : ${event.code},\nkey : ${event.key}`;
});