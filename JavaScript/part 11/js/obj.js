let methodMap = () => {
  let numbers = [1, 2, 3, 4, 5];
  let newNumbers = numbers.map(numbers => numbers * 2);
  console.log(newNumbers); // [2, 4, 6, 8, 10]

  let indNumbers = numbers.map((numbers, index) => numbers * 2 + index);
  console.log(indNumbers); // [2, 5, 8, 11, 14]
}

let methodFilter = () => {
  let scores = [82, 75, 48, 64, 36];
  let newSclores = scores.filter(score => score >= 60);
  console.log(newSclores); // [82, 75, 64]

  let indScores = scores.filter((score, index) => {
    if (score >= 60) {
      console.log(`index: ${index}, score: ${score}`);
      return score;
    }
  });
  console.log(indScores); // [82, 75, 64]
}

let methodReduce = () => {
  let values = [1, 2, 3, 4, 5];
  let result = values.reduce((ttl, curr) => ttl * curr, 1);
  console.log(result);
}

let objMap = () => {
  let pCase = new Map();
  pCase.set('eraser', 2000);
  pCase.set('pencil', 1000);
  console.log(pCase); // Map(2) {'eraser' => 2000, 'pencil' => 1000}

  let bag = new Map([
    ['card', 1000],
    ['handkerchief', 2000]
  ]);
  console.log(bag); // Map(3) {'card' => 1000, 'handkerchief' => 2000}

  bag.set('wallet', 5000).set('type', 'backpack');
  console.log(bag); // Map(4) {'card' => 1000, 'handkerchief' => 2000, 'wallet' => 5000, 'type' => 'backpack'}


  console.log(`bag.size: ${bag.size}`); // bag.size: 4
  console.log(`bag.get('type'): ${bag.get('type')}`); // bag.get('type'): backpack
  console.log(`bag.has('type'): ${bag.has('type')}`); // bag.has('type'): true
  console.log(`[...bag.keys()]: ${[...bag.keys()]}`); // [...bag.keys()]: card,handkerchief,wallet,type
  console.log(`bag.delete('type'): ${bag.delete('type')}`); // bag.delete('type'): true
  console.log(`bag.size: ${bag.size}`); // bag.size: 3
  bag.clear(); // 맵 객체의 프로퍼티를 모두 지운다.
  console.log(`bag.size: ${bag.size}`); // bag.size: 0
}

let objSet = () => {
  let numSet1 = new Set();
  numSet1.add(10);
  numSet1.add(20);
  console.log('numSet1: ', numSet1); // numSet1:  Set(2) {10, 20}

  let numSet2 = new Set();
  numSet2.add(10).add(20).add(30).add(40);
  console.log('numSet2: ', numSet2); // numSet2:  Set(3) {10, 20, 30, 40}

  let numSet3 = new Set([10, 20, 30, 40]);
  console.log('numSet3: ', numSet3); // numSet3:  Set(4) {10, 20, 30, 40}

  let numSet4 = new Set([10, 20, 30, 10, 40, 20, 10, 20, 10, 40, 30]);
  console.log('numSet4: ', numSet4); // numSet4:  Set(4) {10, 20, 30, 40}

  let langs = new Set(['C', 'C++', 'Java', 'Python', 'Python', 'JavaScript']);
  console.log(langs); // Set(5) {'C', 'C++', 'Java', 'Python', 'JavaScript'}

  for (let lang of langs) {
    console.log(lang);
  }

  console.log(langs.values()); // [Set Iterator] {'C', 'C++', 'Java', 'Python', 'JavaScript'}
}

let iterator = () => {
  let arr = [1, 2, 3, 4, 5];
  let iter = arr[Symbol.iterator]();

  console.log(iter); // Object [Array Iterator] {}
  console.log(iter.next()); // {value: 1, done: false}
  console.log(iter.next()); // {value: 2, done: false}
  console.log(iter.next()); // {value: 3, done: false}
  console.log(iter.next()); // {value: 4, done: false}
  console.log(iter.next()); // {value: 5, done: false}
  console.log(iter.next()); // {value: undefined, done: true}
}

function fnc () {
  console.log('f1');
  console.log('f2');
  console.log('f3');
}

function* gen() {
  yield 'g1';
  yield 'g2';
  yield 'g3';
}

let gener = gen();

console.log(gener); // Object [Generator] {}
console.log(gener.next()); // {value: 'g1', done: false}
console.log(gener.next()); // {value: 'g2', done: false}
console.log(gener.next()); // {value: 'g3', done: false}
console.log(gener.next()); // {value: undefined, done: true}

// methodMap();
// methodFilter();
// methodReduce();
// objMap();
// objSet();
// iterator();
// fnc();
