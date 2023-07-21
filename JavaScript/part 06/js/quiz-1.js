const img = document.querySelector('div > img');

img.addEventListener('mouseenter', () => {
    img.src = 'images/pic-6.jpg'
});

img.addEventListener('mouseout', () => {
    img.src = 'images/pic-1.jpg'
});