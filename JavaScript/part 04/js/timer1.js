let i = 0;

/* function greeting() {
    i++;
    console.log(`안녕하세요. ${i}`);
}

setInterval(greeting, 2000); */

/* let cnt = setInterval(() => {
    i++;
    console.log(`${i}번째 실행`);
    if(i === 5) {
        console.log('실행 종료');
        clearInterval(cnt);
    }
}, 1000); */

function greeting() {
    i++;
    console.log(`${i}번째 실행`);
    if(i == 5) {
        console.log('실행 종료');
        clearInterval(timer);
    }
}

const timer = setInterval(greeting, 1000);