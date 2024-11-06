import { testCases1, testCases2 } from '../back_joon/boj2/boj2.testCase';
import { sum, reverse } from '../back_joon/boj2/boj2';

// eslint-disable-next-line no-undef
test('sum 함수가 각 요소의 합을 올바르게 계산하는지 테스트', () => {
    const result = sum(testCases1);
    const expectedResults = testCases1.map(([A, B]) => A + B);
    // eslint-disable-next-line no-undef
    expect(result).toEqual(expectedResults); // 예상 결과와 비교
});

// eslint-disable-next-line no-undef
test('reverse 함수가 각 문장을 단어 단위로 올바르게 뒤집는지 테스트', () => {
    const result = reverse(testCases2);
    const expectedResults = testCases2.slice(1).map((sentence) =>
        sentence
            .split(' ')
            .map((word) => word.split('').reverse().join(''))
            .join(' ')
    );
    // eslint-disable-next-line no-undef
    expect(result).toEqual(expectedResults); // 예상 결과와 비교
});
