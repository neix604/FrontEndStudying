class Lecture {
  constructor(hasTutor = false, lectId, ...members) {
    this.hasTutor = hasTutor;
    this.lectId = lectId;
    this.members = members;
  }
  getTutor() {
    let tutor = '';

    if (this.hasTutor) {
      tutor = this.members[0];
      this.members = this.members.slice(1);
    } else {
      tutor = '없음';
    }

    return tutor;
  }
}

const hasT = new Lecture(true, 'L001', 'Ahn', 'Han', 'Park');
const noT = new Lecture(false,'L002', 'Choi', 'Kim');

console.log(`강의 : ${hasT.lectId}, 강사 : ${hasT.getTutor()}, 수강생 : ${hasT.members}`);
console.log(`강의 : ${noT.lectId}, 강사 : ${noT.getTutor()}, 수강생 : ${noT.members}`);