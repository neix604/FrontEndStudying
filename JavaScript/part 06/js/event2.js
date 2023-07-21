const btn = document.querySelector('#btn');
const word = document.querySelector('#word');

btn.addEventListener('click', () => {
    const result = document.querySelector('#result');
    
    result.innerText = `click 이벤트 : ${word.value.length}`;
})

word.onchange = () => {
    const resultChange = document.querySelector('#resultChange');
    resultChange.innerText = `change 이벤트 : ${word.value.length}`;
}

word.onkeydown = () => {
    const resultChange = document.querySelector('#resultKeydown');
    resultChange.innerText = `keydown 이벤트 : ${word.value.length}`;
}

word.onkeyup = () => {
    const resultChange = document.querySelector('#resultKeyup');
    resultChange.innerText = `keyup 이벤트 : ${word.value.length}`;
}


const box = document.querySelector('#box');
const pTag = document.querySelector('#coor');

box.addEventListener('click', (event) => {
    if (event.altKey) {
    alert(`클릭한 곳의 좌표는 x: ${event.pageX}, y: ${event.pageY}입니다.`);
    }
});

box.addEventListener('mousemove', (event) => {
        pTag.innerText = `클릭한 곳의 좌표는 x: ${event.pageX}, y: ${event.pageY}입니다.`;
});

/* const elements = document.querySelectorAll('*');

for (let element of elements) {
    element.addEventListener('click', (event) => {
        console.log(event.target);
    });
} */

const contents = document.querySelector('#contents');
const imgPics = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg'];
const arrows = document.querySelectorAll('.arrow');

contents.style.background = `url('images/${imgPics[0]}')`;
let idx = 0;

arrows.forEach( (arrow) => {
    arrow.addEventListener('click', (event) => {
        if (event.target.id === 'left') {
            idx--;
            if (idx < 0) {
                idx = imgPics.length - 1;
            }
            contents.style.background = `url('images/${imgPics[idx]}')`;
        } else {
            idx++;
            if (idx > imgPics.length - 1) {
                idx = 0;
            }
            contents.style.background = `url('images/${imgPics[idx]}')`;
        }
    });
});

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert('우클릭을 할 수 없습니다.');
})