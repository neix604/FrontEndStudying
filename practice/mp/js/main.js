const section = document.querySelector('section');
const article = document.querySelectorAll('article');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const audio = document.querySelector('audio');
const deg = 360 / article.length;

let i = 0;
let num = 0;

for (let el of article) {
  let cover = el.querySelector('.cover');
  let pause = el.querySelector('.pause');
  let play = el.querySelector('.play');
  let replay = el.querySelector('.replay');

  cover.style.background = `url('./img/cover${i + 1}.jpg') no-repeat center/cover`;
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  i++;
  
  pause.addEventListener('click', () => {
    let check = el.classList.contains('on');
    if(check) {
      el.querySelector('.cover').classList.remove('on');
      el.querySelector('audio').pause();
    }
  });

  play.addEventListener('click', () => {
    let check = el.classList.contains('on');
    if(check) {
      el.querySelector('.cover').classList.add('on');
      el.querySelector('audio').play();
    }
  });

  replay.addEventListener('click', () => {
    let check = el.classList.contains('on');
    if(check) {
      el.querySelector('.cover').classList.add('on');
      el.querySelector('audio').load();
      el.querySelector('audio').play();
    }
  });
}

i = 0;

addOn = (i, article) => {
  for (let el of article) {
    el.classList.remove('on');
    el.querySelector('audio').pause();
    el.querySelector('audio').load();
    el.querySelector('.cover').classList.remove('on');
  }
  article[i].classList.add('on');
}

next.addEventListener('click', () => {
  num--;
  section.style.transform = `rotate(${deg * num}deg)`;

  i === article.length - 1 ? i = 0 : i++;
  addOn(i, article);
});

prev.addEventListener('click', () => {
  num++;
  section.style.transform = `rotate(${deg * num}deg)`;

  i === 0 ? i = article.length - 1 : i--;
  addOn(i, article);
});