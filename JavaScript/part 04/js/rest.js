function addNum(a, b) {
    return a + b;
}

console.log('매개변수가 두 개인 함수');
console.log(addNum(1, 2));
console.log(addNum(1, 2, 5, 10));

function sumAll(...number) {
    let sum = 0;
    for (let num of number) {
        sum += num;
    }
    return sum;
}

console.log('...매개변수');
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function showName(first, ...others) {
    let str = '내가 가장 좋아하는 과일은 ' + first + '이고,\n그 다음은 ' + others +'입니다.';
    return str;
}

console.log(showName('사과', '포도', '복숭아', '수박', '멜론'));