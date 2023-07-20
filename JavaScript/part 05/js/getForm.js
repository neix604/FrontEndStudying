// 드롭다운 메뉴의 선택값이 바뀔 때마다 알림창 팝업
/* const selectMenu = document.querySelector('#major');

console.log(selectMenu.options);

selectMenu.onchange = () => {
    console.log(selectMenu.selectedIndex);
    let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
    console.log(selectText);
    alert(`${selectText}을(를) 선택했습니다.`);
} */

// 라디오 버튼을 누를 때마다 알림창 팝업
/* const radio = document.getElementsByName('subject');

for (let i = 0; i < radio.length; i++) {
    radio[i].onclick = () => {
        alert(`${radio[i].value}를 선택하셨습니다.`);
    }
} */
/* for문을 한 번 실행해서 다음 이벤트 함수를 세 개 만든 것과 같다.
radio[0].onclick = () => {
    console.log(radio[0]);
    alert(`${radio[0].value}를 선택하셨습니다.`);
};
radio[1].onclick = () => {
    console.log(radio[1]);
    alert(`${radio[1].value}를 선택하셨습니다.`);
};
radio[2].onclick = () => {
    console.log(radio[2]);
    alert(`${radio[2].value}를 선택하셨습니다.`);
}; */

// 버튼을 눌렀을 때 선택한 메일링 서비스 목록 팝업
const btn = document.querySelector('button');

btn.onclick = function () {
    let mailing = document.querySelectorAll("input[name='mailing']:checked");
    let red=[];

    for (let i = 0; i < mailing.length; i++) {
        red.push(mailing[i].value);
    }

    alert('메일 수신 여부: ' + red.join(', '));
}