import { testCases1 } from './boj1.testCase.js';

/**
 * 백준 10951번 문제
 * A와 B의 값을 더한다.
 *
 * @param {*} testCases1
 * @returns
 */
export function sum(testCases1) {
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
sum(testCases1).forEach((results) => console.log(results));
