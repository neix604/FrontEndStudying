
var x = 10, y = 3, result;

// 덧샘 연산
result = x + y;
console.log("x + y = " + result);

// 나누기 연산
result = x / y;
console.log("x / y = " + result);

// 나머지 연산
result = x % y;

console.log("x % y = " + result);

// 증감 연산자
var a = 10;        // a=10
var b = a++ + 5;   // a=10, b=15, a=11,  a++는 계산 후 연산된다.
var c = b--;       // a=11, b=14, c=15
console.log(a, b, c);

var a = 10;        // a=10
var b = ++a + 5;   // a=11, b=16, ++a 연산을 먼저 하고 계산한다.
var c = --b;       // a=11, b=15, c=15
console.log(a, b, c);

// 할당 연산자
var a = 10;
a = a + 5;
console.log(a);

var a = 10;
a += 5;  // a = a + 5;
y = 10;
y += a   // y = y + a;

console.log(a, y);

// 문자열 연산(+): 연결 연산자
var name = "홍길동";
console.log(name + "님, 안녕하세요?");

var a = 10;
console.log(a + "20");  // 1020

var a = 100;
var b = "10";
console.log(a / b);     // 10

var a = 100;
var b = "js";
console.log(a / b);     // NaN

// 비교연산자
var a = 3, b = "3";
console.log(a == b);   // true
console.log(a === b);  // false
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a <= b);   // true

// 아스키코드를 이용한 문자열 비교
console.log("a" > "b");        // false
console.log("Java" > "JAVA")   // true
console.log("a".charCodeAt()); // 97
console.log("b".charCodeAt()); // 98
console.log("A".charCodeAt()); // 65