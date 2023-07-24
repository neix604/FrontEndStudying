const title = document.querySelector('#title');
const author = document.querySelector('#author');
const saveBtn = document.querySelector('#save');
const bookList = document.querySelector('#bookList');

saveBtn.addEventListener('click', (event) => {
  event.preventDefault(); // 기본 이벤트 막음
  const li = document.createElement('li');

  li.innerHTML = `${title.value} - ${author.value}<button class="delButton">삭제</button>`;
  
  bookList.appendChild(li);

  title.value = '';
  author.value = '';

  const delBtn = document.querySelectorAll('.delButton');
  
  for (let del of delBtn) { // 버튼 중에서
    del.addEventListener('click', () => { // 하나를 클릭하면
      del.parentNode.remove(); // 그 버튼의 부모 요소 삭제
    });
  }
});