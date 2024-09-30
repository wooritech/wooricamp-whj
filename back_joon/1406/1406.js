// 문제 풀이를 위해 백준에서 제공하는 기능과 데이터
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// 두개의 스택을 사용해서 데이터를 저장한다.
// 첫번째 스택은 가져온 데이터를 저장하는 용도 겸 처리된 데이터 중 커서 왼쪽에 저장될 데이터를 담는다.
let Lstack = input[0].split('')
// 두번째 스택은 오른쪽에 저장할 데이터를 담는다.
let Rstack = []

// 주어진 데이터를 반복 실행할 for 문
for (let i = 2; i < input.length; i++) {
    let array = input[i].split(' ')
    // 데이터의 내용에 따라 처리할 if 문
    if (array[0] === 'L' && Lstack.length) {
        Rstack.push(Lstack.pop())
    } else if (array[0] === 'D' && Rstack.length) {
        Lstack.push(Rstack.pop())
    } else if (array[0] === 'B') {
        Lstack.pop()
    } else if (array[0] === 'P') {
        Lstack.push(array[1])
    }
}

// 나눠진 두개의 스택을 합치고 출력한다.
console.log(Lstack.concat(Rstack.reverse()).join(''))
