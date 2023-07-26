class Pet { // Pet 클래스 선언
  constructor(name, color, run = true) {
    this.name = name;
    this.color = color;
    this.run = run;
  }
  running() { // running 메소드 선언
    let str = `${this.name} is ${this.run ? 'running' : 'not running'}`;
    return alert(str);
  }
}

let cheese = new Pet('치즈', 'brown'); // 인스턴스 객체 선언

cheese.running(); // 메소드 실행