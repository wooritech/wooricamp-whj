function User(name) { //생성자 함수 User 생성 /외부 인수를 매개변수 name으로 받는다
  this.name = name
}
User.prototype.normal = function () {//normal 메소드에 일반함수 할당
  console.log(this.name)
}
User.prototype.arrow = () => {//arrow 메소드에 화살표 함수 할당
  console.log(this.name)
}

const heropy = new User('Heropy') //생성자 함수 User와 인수 Heropy를 
                                  //heropy라는 인스턴스로 만든다.
heropy.normal()
heropy.arrow()