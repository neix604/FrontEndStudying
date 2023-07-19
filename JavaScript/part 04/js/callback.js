const btn = document.querySelector('button');

/* function display() {
    alert('버튼을 클릭했습니다.');
} */

let display = () => alert('버튼을 클릭했습니다.');

btn.addEventListener('click', display);
// btn.addEventListener('click', () => alert('버튼을 클릭했습니다.'));