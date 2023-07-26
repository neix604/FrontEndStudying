const uYear = document.querySelector('#year');
const uMonth = document.querySelector('#month');
const uDate = document.querySelector('#date');
const btn = document.querySelector('#bttn');

const curr = document.querySelector('#current');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');

btn.addEventListener('click', () => {
  const now = new Date();

  const birthDay = new Date(uYear.value, uMonth.value - 1, uDate.value);

  curr.innerText = `현재: ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
  days.innerText = `지난 날짜: ${parseInt((now.getTime() - birthDay.getTime()) / (1000 * 60 * 60 * 24))}일`;
  hours.innerText = `지난 시간: ${parseInt((now.getTime() - birthDay.getTime()) / (1000 * 60 * 60))}시간`;
});