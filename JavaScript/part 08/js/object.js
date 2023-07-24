const btn = document.querySelector('button');
const popWidth = 600;
const popHeight = 500;

btn.addEventListener('click', () => {
  let left = (screen.availWidth - popWidth) / 2;
  let top = (screen.availHeight - popHeight) / 2;
  window.open('notice.html', '', `width = ${popWidth} height = ${popHeight} left = ${left} top = ${top}`);
});



const result = document.querySelector('#result');
const firstDay = new Date('2000-01-01');
const today = new Date();

let period = today.getTime() - firstDay.getTime();

result.innerHTML = parseInt(period / 1000 / 60 / 60 / 24);


let student = {
  name: '홍길동',
  age: 20,
  score : {
    math: 80,
    science: 90,
    history: 75,
    average: function() {
      return (this.math + this.science + this. history) / 3;
    }
    /* average() {
      return (this.math + this.science + this. history) / 3;
    } */
  }
}

console.log(student.name);
console.log(student.score.history);
console.log(student.score.average());


let obj2 = {
  color: 'blue',
  width: 30,
  height: 50,
}


/* let book1 = {
  title: '자바스크립트',
  pages: 500,
  author: '김철수'
}

let book2 = {
  title: 'HTML5 + CSS3',
  pages: 320,
  author: '김영희'
} */
// 객체를 일일이 정의하기 힘들기 때문에 class를 써서 객체를 만든다.
class book {
  constructor(title, pages, author, done = false) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.done = done;
  }

  readBook() {
    let str = this.done ? '읽음' : '읽지 않음';
    return str;
  }
}

let book3 = new book('자바', 600, '홍길동', true);
let book4 = new book('파이썬', 400, '홍길동', false);

console.log(`${book3.title}, ${book3.author}, ${book3.readBook()}`);
console.log(`${book4.title}, ${book4.author}, ${book4.readBook()}`);