// 달력
function calendar() {
    const now = new Date(); // 텍스트가 바뀌는 걸 목적으로 함수를 만들었기 때문에 실행될 때마다 Date 객체를 받아와서 초기화한다.

    const today = {
        year: now.getFullYear(),
        date: now.getDate(),
        month: now.toLocaleString('en-US', { month: '2-digit' }), // toLocaleString(locales, [options]); locales에는 BCP 47 언어 태그를 넣는다.
        day: now.toLocaleString('ko-KR', { weekday: 'long' }), // 여기서는 달과 요일을 영문으로 짧게 반환하도록 했다.
    }

    for (const key in today) { // today 객체 안의 key 개수만큼 반복해서 실행한다.
        document.getElementById(key).textContent = today[key]; // id="key"인 요소 안의 텍스트를 가져와 today[key] 안에 저장돼 있는 value로 바꾼다.
    }

    // document.getElementById(year).textContent = today.year;
    // 위처럼 하나하나 바꿔줄 수 있지만 for...in으로 반복문을 돌리면 프로퍼티가 많아져도 손쉽게 바꿀 수 있다.
    // 따라서 동적인 요소라면 class나 id를 명명할 때 특히 주의해야 할 것 같다.
}

// 시계
function clock() {
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0"); // 숫자로 받은 데이터를 문자열로 바꾸고 데이터가 2음절이 아닐 때 앞에 0을 추가한다.
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // if(hour > 12) {...};
    // 조건문을 넣어서 AM, PM을 표시할 수도 있다.
    // 이렇게 할 때에는 변수를 문자열로 바꾸지 않고 그대로 받아와야 하지만,
    // if(hour < 10) {...}; 조건문으로 앞에 0을 추가할 수 있다.

    document.getElementById('clock').textContent = `${hour}:${minutes}:${seconds}`;

    if(hour === '23' && minutes === '59' && seconds === '59') { // 23시 59분 59초가 되면 1초 후에 calendar 함수를 실행한다.
        setTimeout(calendar, 1000);
    }
}

calendar();
clock();
setInterval(clock, 1000); // 1000ms마다 clock 함수를 실행한다.