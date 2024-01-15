const user = {
  name: 'whj',
  age: 25,
  email: 'ewfsdfweadfawefavva'
}

const { name: whj, age = '30', email, address = 'korea' } = user

console.log(`사용자의 이름은 ${whj}입니다.`)
console.log(`${whj}의 나이는 ${age}세입니다.`)
console.log(`${whj}의 이메일 주소는 ${email}입니다`)
console.log(address)

const fruits = ['apple', 'banana', 'cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d)