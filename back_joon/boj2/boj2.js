import testCases from './boj2.spec.js';
const { testCases1, testCases2 } = testCases;

/**
 * 백준 10951번 문제
 * A와 B의 값을 더한다.
 */
function sum1() {
    // 가져온 예제 testCases1의 길이 많큼 반복한다.
    for (let i = 0; i < testCases1.length; i++) {
        // 배열 비구조화 할당을 사용하여
        // testCases1의 각각의 배열에 들어가있는 숫자를 A와 B에 대입 시킨다.
        const [A, B] = testCases1[i];
        console.log(A + B);
    }
}
sum1();

/**
 *
 * @param {*} testCases1
 * @returns
 */
function sum2(testCases1) {
    // 결과값을 저장할 배열 생성
    const results = [];
    for (let i = 0; i < testCases1.length; i++) {
        // 배열 비구조화 할당을 사용해 A, B 변수에 할당
        const [A, B] = testCases1[i];
        // 합계를 results 배열에 추가
        results.push(A + B);
    }
    return results;
}
// sum 함수의 반환값을 콘솔에 출력
// const results = sum2(testCases1);
sum2(testCases1).forEach((results) => console.log(results));

/**
 * 백준 9093번 문제
 * 문장의 단어들의 위치는 유지하면서 단어를 구성하는 알파벳의 순번을 뒤집는 코드
 * 예) 원문  I am happy today
 * 		결과  I ma yppah yadot
 */
function reverse1() {
    // 가져온 예제 testCases2의 길이 많큼 반복한다.
    // i가 1부터 시작하는 이유는 배열의 첫번째 요소는 문자열의 개수를 나타내는 숫자고 출력되지 않기 때문이다.
    for (let i = 1; i < testCases2.length; i++) {
        // testCases2의 i번째 배열의 문장을 sentence라는 변수에 넣는다.
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
reverse1();

/**
 *
 * @param {*} testCases2
 * @returns
 */
function reverse2(testCases2) {
    const results = [];
    // 가져온 예제 testCases2의 길이 많큼 반복한다.
    // i가 1부터 시작하는 이유는 배열의 첫번째 요소는 문자열의 개수를 나타내는 숫자고 출력되지 않기 때문이다.
    for (let i = 1; i < testCases2.length; i++) {
        // testCases2의 i번째 배열의 문장을 sentence라는 변수에 넣는다.
        const sentence = testCases2[i];
        const reverse = sentence
            // 문장을 ' '을 기준으로 나눈다.
            .split(' ')
            // 나눈 단어들을 문자 단위로 나눠서 뒤집고 합친다.
            .map((word) => word.split('').reverse().join(''))
            // 뒤집어진 단어들을 다시 합쳐 문장으로 만든다.
            .join(' ');
        results.push(reverse);
    }
    return results;
}
reverse2(testCases2).forEach((results) => console.log(results));
