import { test, expect } from '@playwright/test';

test.describe('Chart Testing', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.realchart.co.kr/demo/Basic/basic-bar');
    });

    // 1.Title 값 가져오기
    test('Get Title', async ({ page }) => {
        const title = await page.locator('.rct-title').textContent();
        expect(title).toBe('월별 매출 현황 분석');
    });

    // 2.Subtitle 값 가져오기
    test('Get Subtitle', async ({ page }) => {
        const subtitle = await page.locator('.rct-subtitle').textContent();
        expect(subtitle).toBe('1월부터 12월까지의 매출 변화 추적');
    });

    // 3.xAxis label 값 배열로 가져오기
    test('Get xAxis Labels', async ({ page }) => {
        await page.waitForSelector(
            '.rct-axis[xy="x"] .rct-axis-labels .rct-axis-label'
        );
        const xAxisLabels = await page.locator(
            '.rct-axis[xy="x"] .rct-axis-labels .rct-axis-label'
        );
        const xAxisLabelArray = await xAxisLabels.allTextContents();
        const xAxisArray = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        expect(xAxisLabelArray).toEqual(xAxisArray);
    });

    // 4.yAxis label 값 배열로 가져오기
    test('Get yAxis Labels', async ({ page }) => {
        await page.waitForSelector(
            '.rct-axis[xy="y"] .rct-axis-labels .rct-axis-label'
        );
        const yAxisLabels = await page.locator(
            '.rct-axis[xy="y"] .rct-axis-labels .rct-axis-label'
        );
        const yAxisLabelArray = await yAxisLabels.allTextContents();
        const yAxisArray = ['-200', '-100', '0', '100', '200'];
        expect(yAxisLabelArray).toEqual(yAxisArray);
    });

    // 5.xAxis title 값 가져오기
    test('Get xAxis Title', async ({ page }) => {
        const xAxisTitle = await page
            .locator('.rct-axis[xy="x"] .rct-axis-title')
            .textContent();
        expect(xAxisTitle).toBe('월 (1월 - 12월)');
    });

    // 6.yAxis title이 안 그려진 거 확인하기
    test('Check yAxis Title not rendered', async ({ page }) => {
        const yAxisTitle = page.locator('.rct-axis[xy="y"] .rct-axis-title');
        const yAxisTitleNull = await yAxisTitle.textContent();
        expect(yAxisTitleNull).toBe('');
    });

    // 7.Data point가 음수인지 양수인지 확인하기
    test('Check Data Points Sign', async ({ page }) => {
        // .rct-line 요소 중 세 번째 요소의 위치를 가져오기
        const lines = page.locator('.rct-axis-grid .rct-axis-grid-line').nth(2); // .rct 내부의 .rct-line 요소들 선택
        // 라벨이 0인 라인의 위치
        const boundingBox = await lines.boundingBox();
        const yAxisZeroLinePosition = boundingBox?.y ?? 0;
        // 각 데이터 포인트 가져오기
        const dataPoints = await page.locator('.rct-point-label');
        const pointCount = await dataPoints.count();

        // 각 데이터 포인트가 0 라인을 기준으로 위치하는지 검사
        for (let i = 0; i < pointCount; i++) {
            // 각 데이터 포인트의 y 좌표 가져오기
            const pointYPosition = await dataPoints.nth(i).boundingBox();
            const pointYPositions = pointYPosition?.y ?? 0;
            // 데이터 포인트의 값을 가져오기
            const pointValueText = await dataPoints.nth(i).textContent();
            // pointValueText를 숫자로
            const pointValue = parseFloat(pointValueText || '0');

            // 값이 양수일 때 0 기준선 위에 있는지 확인
            if (pointValue > 0) {
                expect(pointYPositions).toBeLessThan(yAxisZeroLinePosition);
            }
            // 값이 음수일 때 0 기준선 아래에 있는지 확인
            else if (pointValue < 0) {
                expect(pointYPositions).toBeGreaterThan(yAxisZeroLinePosition);
            }
            // 값이 0일 때는 기준선과 같은 위치에 있는지 확인
            else {
                expect(pointYPositions).toBeCloseTo(yAxisZeroLinePosition, 1);
            }
        }
    });

    // 8.코드 보기 버튼 클릭해서 config가 보이게 하기
    test('Click View Code Button', async ({ page }) => {
        page.locator('label:has-text("코드 보기")').click();
        const config = page.locator('.overflow-guard');
        await expect(config).toBeVisible();
    });

    // 9.Inverted 버튼 클릭하기
    test('Click Inverted Button', async ({ page }) => {
        const xAxisBefore = await page
            .locator('.rct-axis[xy="x"]')
            .boundingBox();
        const yAxisBefore = await page
            .locator('.rct-axis[xy="y"]')
            .boundingBox();
        await page.locator('label:has-text("Inverted")').click();
        const xAxisAfter = await page
            .locator('.rct-axis[xy="x"]')
            .boundingBox();
        const yAxisAfter = await page
            .locator('.rct-axis[xy="y"]')
            .boundingBox();
        expect(xAxisBefore).not.toEqual(xAxisAfter); // xAxis 위치가 변경되었는지 확인
        expect(yAxisBefore).not.toEqual(yAxisAfter); // yAxis 위치가 변경되었는지 확인
    });

    // 10.Palette 값 변경하기
    test('Change Palette Value1', async ({ page }) => {
        const options = page.locator(
            '.mantine-Select-dropdown .mantine-sacbkk'
        );
        // 옵션 선택 반복 실행하기
        for (let i = 0; i <= 6; i++) {
            await page.locator('.mantine-Input-wrapper').click();
            await page.waitForTimeout(300);
            await options.nth(i).click();
            await page.waitForTimeout(300);
        }
    });

    // 11.config값 가져오기
    test('Get Config Value', async ({ page }) => {
        await page.locator('label:has-text("코드 보기")').click();
        const expectedTexts = `const config = {
    type: 'bar',
    title: '월별 매출 현황 분석',
    subtitle: '1월부터 12월까지의 매출 변화 추적',
    options: {
        palette: 'default'
    },
    xAxis: {
        title: '월 (1월 - 12월)',
        categories: [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {},
    series: [{
        name: '월 매출',
        colorByPoint: true,
        pointLabel: true,
        pointWidth: 30,
        yAxis: 0,
        data: [
            [-130], [-100], [-50],`;
        await page.waitForSelector(
            '.monaco-editor .monaco-scrollable-element .view-lines'
        );
        const config = (
            await page
                .locator(
                    '.monaco-editor .monaco-scrollable-element .view-lines'
                )
                .textContent()
        )?.replace(/\s+/g, '');
        const compare = expectedTexts.replace(/\s+/g, '');
        expect(config).toBe(compare);
    });

    // 12.스냅샷 저장하기
    test('Chart Snapshot', async ({ page }) => {
        const graph = page.locator('.rct-svg');
        await expect(graph).toHaveScreenshot();
    });
});
