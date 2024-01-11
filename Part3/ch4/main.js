const heropy = { //heropy 변수 선언 / {}객체 데이터 할당
  name: 'Heropy', //name이라는 이름의 속성에 문자데이터 Heropy
  normal: function () { //메소드 normal /function으로 익명의 일반함수 할당
    console.log(this.name)//this에 name 출력
  },
  arrow: () => { //화살표 함수 할당
    console.log(this.name)
  }
}
heropy.normal() //함수 실행
heropy.arrow() // undefined가 안나오는건 this가
  // ""공백문자를 지정하고 있어서이다. 디버그로 확인할것

const amy = {
  name: 'Amy',
  normal: heropy.normal, // line 3의 normal이 할당된다.
  arrow: heropy.arrow // line 6의 arrow가 할당된다.
}
amy.normal() //호출 위치에서 정의/ amy->this->this의 name이 Amy
amy.arrow() 