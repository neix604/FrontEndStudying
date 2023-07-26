const orgn = document.querySelector('#origin');
const rslt = document.querySelector('#result');

const table1 = document.createElement('table');
orgn.appendChild(table1);

const table2 = document.createElement('table');
rslt.appendChild(table2);

let arr = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  const td = document.createElement('td');
  td.innerText = arr[i];
  table1.appendChild(td);
  sum += arr[i];
}

arr.push(sum);

for (let i = 0; i < arr.length; i++){
  const td = document.createElement('td');
  td.innerText = arr[i];
  table2.appendChild(td);
}