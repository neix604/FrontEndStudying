function* station() {
  yield '광운대역';
  yield '외대앞역';
  yield '가능역';
  yield '의정부역';
  yield '양주역';
  yield '시청역';
  yield '동대문역';
  yield '신이문역';
  yield '종각역';
  yield '서울역';
  yield '청량리역';
  yield '제기동역';
  yield '회기역';
  yield '도봉역';
  yield '회룡역';
  yield '방학역';
  yield '창동역';
  yield '월계역';
}

let subway = station();

const btn = document.querySelector('button');
const rslt = document.querySelector('#result');

btn.addEventListener('click', () => {
  let nextStation = subway.next();
  if (!nextStation.done) {
    rslt.innerHTML +=  '<br/>' + nextStation.value;
  } else {
    rslt.innerHTML += '<br/>종점입니다.';
    btn.setAttribute('disabled', 'disabled'); // btn.disabled = true;
  }
});