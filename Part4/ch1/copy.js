const user = { // 참조형 데이터                                                                                                                                                                                                       
  name: 'heropy',
  age: 85,
  emails: ['qwertyuiop']
}
// const copyUser = user // user와 copyUser의 참조 위치가 동일
// console.log(copyUser === user)

const copyUser = Object.assign({}, user) // ({대상객체}, 출처객체) 대상객체에 출러객체의 값을 담아서 copyUser에 반환한다
// const copyUser = {...user} //윗줄과 동일한 얕은 복사
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

