function calcsum1() {
    let sum = 0;
    for(let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log(`calcsum1 : 1부터 10까지의 합계는 ${sum}입니다.`)
}

function calcsum2(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(`calcsum2 : 1부터 ${n}까지의 합계는 ${sum}입니다.`);
}

function calcsum3(s, n) {
    let sum = 0;
    for(let i = s; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let str = ~~[prompt("시작값을 입력하세요.")];
let end = ~~[prompt("종료값을 입력하세요.")];

document.write(`calcsum3 : ${str}부터 ${end}까지의 합은 ${calcsum3(str, end)}입니다.`)

function calcsum4(s = 1, n = 100) {
    let sum = 0;
    for(let i = s; i <= n; i++) {
        sum += i;
    }
    console.log(`calcsum4 : ${s}부터 ${n}까지의 합계는 ${sum}입니다.`);
}

calcsum1();
calcsum2(10);
calcsum3(1,10);
calcsum4();