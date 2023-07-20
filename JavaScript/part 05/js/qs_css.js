let title = document.querySelector('#title');

title.onclick = () => {
    title.style.color = '#fff'; // 'white', 'rga(255 255 255)'도 가능
    title.style.backgroundColor = '#000';
    title.style.padding = '5px';
    title.style.borderRadius = '5px';
    title.style.transition = 'all 1s';
}

let userName = document.querySelector('#desc p');

userName.onclick = () => {
    userName.style.color = 'blue';
    userName.style.fontWeight = 'bold';
}