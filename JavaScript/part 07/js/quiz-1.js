const uName = document.querySelector('#username');
const uMajor = document.querySelector('#major');
const btn = document.querySelector('button');
const tbody = document.querySelector('tbody');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdMajor = document.createElement('td');

  tdName.innerText = uName.value;
  tdMajor.innerText = uMajor.value;
  uName.value = '';
  uMajor.value = '';

  tr.appendChild(tdName);
  tr.appendChild(tdMajor);
  tbody.appendChild(tr);
});