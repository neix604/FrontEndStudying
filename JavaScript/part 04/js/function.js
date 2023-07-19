let sum = function(a, b) {
    return a + b;
}

console.log(`함수 실행 결과 : ${sum(10,20)}`);

(function() {
    let userName = prompt('이름을 입력하세요.', '');
    console.log('첫번째 즉시 실행함수');
    alert(`안녕하세요, ${userName}님!`);
})();

(function(a, b) {
    console.log('두번째 즉시 실행함수');
    console.log(`a + b = ${a + b}`);
})(10,20);