let div1 = document.querySelector('div');
console.log('div 중 첫번째 요소');
console.log(div1);

let p1 = document.querySelector('p');
console.log('p 중 첫번째 요소');
console.log(p1);

let divIdDesc = document.querySelector('#desc');
console.log('id="desc"인 요소');
console.log(divIdDesc);

let divClassUser = document.querySelector('.user');
console.log('class="user"인 요소');
console.log(divClassUser);

let pAll = document.querySelectorAll('p');
console.log('p 태그의 요소 모두');
console.log(pAll);
console.log('p 태그의 요소 중 2번째');
console.log(pAll[1]);

document.querySelector('h1').onclick = () => alert('안녕하세요.');