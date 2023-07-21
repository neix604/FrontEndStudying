const btn = document.querySelector('#calc');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
    const num1 = parseInt(document.querySelector('#number1').value);
    const num2 = parseInt(document.querySelector('#number2').value);

    let gcd = '다시 입력하세요.';
    for (let i = 0; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    result.innerText = gcd;
});