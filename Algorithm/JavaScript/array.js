const n = ~~[prompt('과목 수 : ')];
let scoreList = [];

for (let i = 0; i < n; i++) {
    scoreList.push(~~[prompt('점수 입력 : ')]);
}

let maxScore = Math.max(...scoreList);
let sumScore = scoreList.reduce((acc, cur) => acc + cur, 0);
// acc를 0으로 초기화 한 후 배열을 돌면서 acc에 현재 인덱스에 저장된 값을 더한다.
// 이렇게도 쓸 수 있다.
// let sumScore = scoreList.reduce(function sum(acc, cur) {
//    return acc + cur;
// }, 0);

console.log(sumScore * 100 / maxScore);