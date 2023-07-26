class Pet {
  constructor(name, color, run = true) {
    this.name = name;
    this.color = color;
    this.run = run;
  }
  running() {
    let str = `${this.name} is ${this.run ? 'running' : 'not running'}`;
    return alert(str);
  }
}

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo() {
    return alert(`이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}`);
  }
}

let bori = new Cat('보리', '흰색', '코숏');

bori.viewInfo();