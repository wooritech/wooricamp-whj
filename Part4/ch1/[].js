const numbers = [1, 2, 3, 4] //변수에 배열 데이터 입력
const fruits = ['apple', 'banana', 'cherry']
const number = [1, 2, 3, 4]

numbers.splice(2, 1)
number.splice(2, 0, 33)

console.log(numbers)
console.log(number)

fruits.splice(2, 0, 'orange')

console.log(fruits)