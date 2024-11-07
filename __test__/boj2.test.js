import { testCases2 } from '../back_joon/9093/boj2.testCase';
import { reverse } from '../back_joon/9093/boj2';

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
