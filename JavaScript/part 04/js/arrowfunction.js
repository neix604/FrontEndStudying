/* let hi = function() {
    return '안녕하세요.';
} */

let hi = () => '안녕하세요.';

alert(hi());

/* let hiName = function(name) {
    alert(name + "님, 안녕하세요.");
} */

let hiName = (name) => alert(name + "님, 안녕하세요.");

hiName(prompt('이름을 입력하세요.', '홍길동'));

/* let sum = function(a, b) {
    return a + b;
} */

let sum = (a, b) => a + b;

alert('합계 : ' + sum(10, 20));