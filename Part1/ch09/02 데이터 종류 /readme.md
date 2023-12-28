
## 문자 데이터
- let myName = "HEROPY";
- let email = 'whj9910@gmail.com';
-  let hello = `hello ${myName}?!`
- // 백틱으로 시작하는 문자데이터는 보간법을 제공 ${}
- console.log(myName); //HEROPY
- console.log(email); //whj9910@gmail.com
- console.log(hello); // hello HEROPY?!

## 숫자 데이터 Number
- // 정수 및 부동 소수점 숫자
- let number = 123;
- let opacity = 1.57;

- console.log(number); //123
- console.log(opacity); //1.57

## 불린 데이터 Boolean
- / /true, false 논리 데이터
- let checked = true;
- let isShow = false;

- console.log(checked); //true
- console.log(isShow); //false

## Undefined
- //값이 할당되지 않은 상태를 나타냅니다.
- let Undef;
- let obj = {abc: 123};

- console.log(undet);//undefined
- console.log(obj.abc);//123
- console.log(obj.xyz);//undefined

## Null
- //의도적으로 값이 비어져 있다
- let empty = null;

- console.log(empty); //null

## Object(객체 데이터)
- //여러 데이터를 Key:Value 형태로 저장한다. {}
```
let user = {
  //key:Value,
  name: 'HEROPY',
  age:85,
  isvalid:true
};
```
- console.log(user.name); //HEROPY
- console.log(user.age); //85
- console.log(user.isvalid); //true

## Array (배열 데이터)
- // 여러 데이터를 순차 적으로 저장합니다. []
- let fruiys = ['Apple','Banana','Cherry'];

- console.log(fruits[0]); //'Apple'
- console.log(fruits[1]); //'Banana'
- console.log(fruits[2]); //'Cherry'

