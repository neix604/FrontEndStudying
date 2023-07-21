/* let newP = document.createElement('p'); // <p></p> 태그 생성
let textNode = document.createTextNode('TypeScript'); // TypeScript 텍스트 생성

newP.appendChild(textNode); // <p></p>에 TypeScript를 넣음
document.body.appendChild(newP); // <body></body>에 <p>TypeScript</p>를 넣음 */

const btn = document.querySelector('#add');
const h2 = document.querySelector('h2').innerText;
const addList = document.querySelector('#addList');

btn.addEventListener('click', () => {
    let newP = document.createElement('p');
    let newT = document.createTextNode(h2);

    newP.style.color = 'blue';
    newP.style.fontSize = '0.8em';

    newP.appendChild(newT);
    addList.appendChild(newP);
}, {once : true}); // 한 번만 실행