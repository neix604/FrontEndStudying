const h1 = document.querySelector('h1');
const userName = document.querySelector('#desc p');
const profileImg = document.querySelector('#profile img');
const intro = document.querySelector('p');

h1.onclick = () => {
    if (h1.style.color === 'red') {
        h1.style.color = 'blue';
    } else {
        h1.style.color = 'red';
    }
}

userName.onclick = () => {
    userName.innerText = '이름 : 민들레';
    intro.innerText = '민들레의 프로필 정보입니다.';
}

profileImg.onclick = () => profileImg.src = 'part 05/images/pf2.png';