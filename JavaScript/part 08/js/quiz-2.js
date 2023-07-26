const ttl = document.querySelector('#seed');
const pick = document.querySelector('#total');
const btn = document.querySelector('#raffle');
const rslt = document.querySelector('#result');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  
  let numarr = [];

  for (let i = 0; i < pick.value; i++) {
    let num = Math.floor((Math.random() * ttl.value) + 1) + '번';
    if (numarr.indexOf(num) === -1) {
      numarr.push(num);
    } else {
      i--;
    }
  }

  rslt.innerText = `당첨자: ${numarr.join(', ')}`;
  rslt.classList.add('show');
});