const btn = document.querySelector('#bttn');
const box = document.querySelector('#noti-box');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const noti = document.createElement('div');
  noti.classList = 'noti';
  noti.innerText = '알림 내용이 표시됩니다.';

  box.appendChild(noti);
  
  setTimeout(() => {box.removeChild(noti)}, 3000);
});