var heading = document.querySelector('#heading');

heading.onclick = function () {
    // 폰트 색이 빨간색이면 파란색으로 바꾸고 아니면 빨간색으로 바꾼다.
    if (heading.style.color === 'red') {
        heading.style.color = 'blue';
    } else {
        heading.style.color = 'red';
    }
}