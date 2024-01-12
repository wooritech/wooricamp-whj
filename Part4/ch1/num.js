const pi = 3.141592 // 변수 pi에 숫자 데이터 입력
console.log(pi)

const str = pi.toFixed(2) // toFixed(숫자) 소수점 몇번째 자리까지 유지 할 것인지
                         // 그 값이 str 변수로 들어간다
console.log(str)
console.log(typeof str)//typeof 데이터의 타입을 확인

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)