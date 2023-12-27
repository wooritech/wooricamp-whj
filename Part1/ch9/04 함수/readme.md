# 함수
- // 함수 선언
function helloFune() {
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFune(); // 1234

function returnFunc() {
  return 123;
}
let a = returnFunc();
console.log(a); //123

// 함수 선언
function sum(b,c) {
  //a와b는 매개변수(parameters)
  return b + c;
}
// 재사용
let b = sum(1,2); //1과 2는 인수
let c = sum(7,12);
let d = sum(2,4);

console.log(b,c,d); //3,19,6

// 이름이 있는 함수
// 함수 선언
function hello() {
  console.log('Hello~');
}
// 이름이 없는 함수
// 함수 표현
let world = function (){
  console.log('world~');
}

// 함수 호출
hello(); // Hello~
world(); // world~

//객체 데이터
const heropy = {
  name: 'HEROPY',
  ahe:85,
  // 메소드
  getName:function(){
    return this.name;
  }
};

const hisName = heropy.getName();
console.log(hisName); // HEROPY
// 혹은
console.log(heropy.getName());//HEROPY