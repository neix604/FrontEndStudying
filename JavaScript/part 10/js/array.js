

let userArr = []; // userArr = new Array();
let sum = 0;

for (let i = 0; i < 10; i++) {
  userArr.push(parseInt(prompt('숫자를 입력하세요.')));
  sum += userArr[i];
}

console.log(`입력한 값 : ${userArr}\n합계 : ${sum}, 평균 : ${(sum / userArr.length).toFixed(2)}`);