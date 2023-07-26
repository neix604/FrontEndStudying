const btn = document.querySelector('button');
const rslt = document.querySelector('#result');

let lotto = new Set();

btn.addEventListener('click', () => {
  for (;;) {
    let num = Math.floor((Math.random() * 45) + 1);
    lotto.add(num);
    if (lotto.size === 6) { break; }
  }
  rslt.innerText = [...lotto].join(', ');
  lotto.clear();
});