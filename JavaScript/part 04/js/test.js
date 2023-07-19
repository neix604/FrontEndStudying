/* const num1 = parseInt(prompt("숫자를 입력해주세요."));

if(num1 < 0) {
    alert(`${num1}은 음수입니다.`);
} else if(num1 === 0) {
    alert(`${num1}은 0입니다.`);
} else if(num1 > 0){
    alert(`${num1}은 양수입니다.`);
} else {
    alert('잘못된 값을 입력했습니다.');
} */

let getMax = function(a, b) {
    let max = 1;
    for(let i = 0; i <= Math.min(a, b); i++) {
        if(a % i === 0 && b % i === 0) {
            max = i;
        }
    }
    return max;
}

function getMin(a, b) {
    let min = 1;
    for(;;) {
        if(min % a === 0 && min % b ===0) {
            break;
        }
        min++;
    }
    return min;
}

console.log(getMax(25, 50));
console.log(getMin(5, 3));