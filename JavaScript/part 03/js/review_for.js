const names = ['Kim', 'Lee', 'Park', 'Choi', 'Han'];

for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]}님! 안녕하세요.`);
}

let sum = 0;
for (i = 0; i < 11; i++) {
    sum += i;
}
console.log(sum);

sum = 0;
for (i = 0; i < 101; i += 2) {
    sum += i;
}
console.log(sum);