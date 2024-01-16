import _ from 'lodash'

const usersA = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo' }
]
const usersB = [
  { userId: '1', name: 'HEROPY' },
  { userId: '3', name: 'Amy' }
]
const usersC = usersA.concat(usersB)//합치기
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))//중복 제거

const usersD = _.unionBy(usersA, usersB, 'userId')//중복없이 합치기
console.log('unionBy', usersD)



const users = [
  { usersid: '1', nameing: 'Heropy' },
  { usersid: '2', nameing: 'Neo' },
  { usersid: '3', nameing: 'Amy' },
  { usersid: '4', nameing: 'Evan' },
  { usersid: '5', nameing: 'Lewis' }
]

const foundUser = _.find(users, { nameing: 'Amy'})
const foundUserIndex = _.findIndex(users, {nameing: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { nameing: 'Heropy'})
console.log(users)