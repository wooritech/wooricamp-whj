import { testCases1 } from '../back_joon/10951/boj1.testCase';
import { sum } from '../back_joon/10951/boj1';

// eslint-disable-next-line no-undef
test('sum 함수가 각 요소의 합을 올바르게 계산하는지 테스트', () => {
    const result = sum(testCases1);
    const expectedResults = testCases1.map(([A, B]) => A + B);
    // eslint-disable-next-line no-undef
    expect(result).toEqual(expectedResults); // 예상 결과와 비교
});
