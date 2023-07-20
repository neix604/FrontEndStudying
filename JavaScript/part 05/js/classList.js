const cList = document.querySelector('#desc p').classList;
console.log(cList);

const title = document.querySelector('#title');

// if문으로 토글
/* title.onclick = () => {
    if (title.classList.contains('blue-italic')) { // if(title.classList == 'blue-italic')
        title.classList.remove('blue-italic');
    } else {
        title.classList.add('blue-italic');
    }
} */

// toggle을 써서 코드 길이를 줄일 수 있다. 경제적!
const img = document.querySelector('#profile img');

title.onclick = () => {
    title.classList.toggle('blue-italic');
}