import _ from '../node_modules/lodash'

const user = { // 참조형 데이터                                                                                                                                                                                                       
  name: 'heropy',
  age: 85,
  emails: ['qwertyuiop']
}
const copyUser = _.cloneDeep(user) //깊은 복사
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

user.emails.push('asdfghjkl')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)