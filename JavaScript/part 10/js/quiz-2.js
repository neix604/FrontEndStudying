const orgn = document.querySelector('#origin');
const rslt = document.querySelector('#result');
let arr = [2, 4, 6, 8, 10];

let tail = () => {
  return arr.length > 1 ? arr.slice(1) : arr;
}

orgn.innerText = arr.join(', ');
rslt.innerText = tail(arr).join(', ');