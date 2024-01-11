import  {getType}  from "./getType"

console.log(typeof 'Hello world!')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))

//산술연산자

console.log(1+2)
console.log(5-7)
console.log(3*4)
console.log(5/3)
console.log(5%3)

// 할당 연산자

let a = 2
const b = 3
a = a + 2
console.log(a)
console.log(a+b)

// 비교 연산자
const c = 1
const d = 2

console.log(c === d) // 일치 연산자

function isEqual(x,y) {
  return x === y
}

console.log(isEqual(1,1))
console.log(isEqual(2,'2'))

const e = 1
const f = 3

console.log(e !== f) //불일치 연산자

const g = 1
const h = 3

console.log(g < h)  