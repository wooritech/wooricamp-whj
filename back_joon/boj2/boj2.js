const fs = require('fs');
const { testCases1, testCases2 } = require('./boj2.spec');

/**
 * 백준 10951번 문제
 * A와 B의 값을 더한다.
 */
function sum() {
    // 가져온 예제 testCases1의 길이 많큼 반복한다.
    for (i = 0; i < testCases1.length; i++) {
        // 배열 비구조화 할당
        let [A, B] = testCases1[i];
        console.log(A + B);
    }
}

/**
 * 백준 9093번 문제
 * 문장의 단어들의 위치는 유지하면서 단어를 구성하는 알파벳의 순번을 뒤집는 코드
 */
function reverse() {
    // 가져온 예제 testCases2의 길이 많큼 반복한다.
    for (i = 0; i < testCases2.length; i++) {
        const sentence = testCases2[i];
        const reverse = sentence
            // 문장을 ' '을 기준으로 나눈다.
            .split(' ')
            // 나눈 단어들을 문자 단위로 나눠서 뒤집고 합친다.
            .map((word) => word.split('').reverse().join(''))
            // 뒤집어진 단어들을 다시 합쳐 문장으로 만든다.
            .join(' ');
        console.log(reverse);
    }
}

sum();
reverse();
