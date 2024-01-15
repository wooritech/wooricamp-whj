const fruits = ['apple', 'banana', 'cherry', 'orange']
console.log(fruits)
console.log(...fruits)

function toObject(a, b, ...c) { //...c를 rest parameter(나머지 매개변수)라고 부른다.
  return {
    1: a,
    b: b, //속성명 변수명이 동일하면 하나만 남겨도 된다. b,
    3: c
  }
}
console.log(toObject(...fruits))
console.log(toObject(fruits[0], fruits[1], fruits[2]))
