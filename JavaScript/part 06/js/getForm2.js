const sltMenu = document.querySelector('#major');

sltMenu.addEventListener('change', () => {
    const sltMenuText = sltMenu.options[sltMenu.selectedIndex].innerText;
    alert(`${sltMenuText}을(를) 선택했습니다.`);
});