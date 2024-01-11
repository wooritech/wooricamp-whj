# 데이터 타입 확인

- typeof
  - 하나의 js에서 데이터 타입을 확인 한다

```
console.log(typeof '데이터')
```

- 여러 js에서 데이터 타입을 확인 하는 경우에 중복 작성하는 번거로움을 해결하기 위해 사용한다.


```
function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
```

## 비교 연산자

![변환](./비교%20연산자.png)

## 논리 연산자

&& AND 연산자  
|| OR  연산자  
!  NOT 연산자  
^  XOR 연산자

## 삼항 연산자

a ? b : c  
a의 값이 참이면 b 실행  
a의 값이 거짓이면 c 실행

## 조건문

### reandom 함수 만들기

```
export default function random() {
  return Math.floor(Math.random() * 10)
}
```
`floor 내림 함수`

### if else

```js
if(조건){
  내용
}else if(조건){
  내용
}else{
  내용
}
```

### switch

특정한 값으로 딱 떨어지게 분기할 경우

```js
switch () {
  case 0:
    내용
    break
  case 1:
    내용
    break
  default:
    내용
}
```

## 반복문 for

```js
for (시작식; 조건식; 변환식)
for (let i = 0; i < 3; i++)
```

## 유효범위

전역변수:함수 외부에서 선언된 변수 프로그램 전체에 영향을 보인다.  
지역변수:함수 내부에서 선언된 변수 함수 내부에서만 영향을 보인다.    
var은 함수 레벨의 유효범위를 가진다. (함수 하나 전체에 영향을 미친다)  
let, const은 블록 레벨(중괄호 하나)의 유효범위를 가진다.

## 자료형 변환

- 동등 연산자 == 를 사용하면 형 변환이 발생한다.  

```
Truthy (참 같은 값)  
true, {},[],1,2,'false',-12,'3.14' ...
객체 데이터, 배열 데이터, 문자 데이터, 숫자 데이터
```

```
Falsy(거짓 같은 값)  
falsy,'',null,undefined,0,-0,NaN
```