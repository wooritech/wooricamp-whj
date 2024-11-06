// 문제 풀이를 위해 백준에서 제공하는 기능과 데이터
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const path = require('path');
const input = fs
    .readFileSync(path.join(__dirname, 'index.txt'))
    .toString()
    .trim()
    .split('\n');

// 두개의 스택을 사용해서 데이터를 저장한다.
// 첫번째 스택은 가져온 데이터를 저장하는 용도 겸 처리된 데이터 중 커서 왼쪽에 저장될 데이터를 담는다.
// const 사용이 가능한 이유 : 배열, 객체 등의 참조형 데이터인 경우 내용이 변경되도 const 사용가능하다.
// const는 메모리 주소를 고정하는 기능을 하기 떄문에 참조형 데이터의 내용 변경은 상관없다.
const lStack = input[0].split('');
// 두번째 스택은 오른쪽에 저장할 데이터를 담는다.
const rStack = [];

const COMMAND_START_INDEX = 2;
// 주어진 데이터를 반복 실행할 for 문
for (let i = COMMAND_START_INDEX; i < input.length; i++) {
    let commands = input[i].split(' ');
    // 데이터의 내용에 따라 처리할 if 문
    // L = 커서 왼쪽으로 1칸 이동, 커서가 문장 맨 앞이면 무시된다.
    // D = 커서 오른쪽으로 1칸 이동, 커서가 문장 맨 뒤이면 무시된다.
    // B = 커서 왼쪽 문자 1개 제거한다.
    // P = P와 같은 라인에 있는 문자를 문장 오른쪽에 추가한다.
    if (commands[0] === 'L' && lStack.length > 0) {
        rStack.push(lStack.pop());
    } else if (commands[0] === 'D' && rStack.length > 0) {
        lStack.push(rStack.pop());
    } else if (commands[0] === 'B') {
        lStack.pop();
    } else if (commands[0] === 'P') {
        lStack.push(commands[1]);
    }
}

// 나눠진 두개의 스택을 합치고 출력한다.
console.log(lStack.concat(rStack.reverse()).join(''));
