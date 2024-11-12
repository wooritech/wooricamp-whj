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
        const xAxisLabels = await page
            .locator('.rct-axis[xy="x"] .rct-axis-labels')
            .textContent();
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
        expect(xAxisLabels).toBe(xAxisArray);
    });

    // 4.yAxis label 값 배열로 가져오기
    test('Get yAxis Labels', async ({ page }) => {
        const yAxisLabels = await page
            .locator('.rct-axis[xy="y"] .rct-axis-labels')
            .textContent();
        const yAxisArray = ['-200', '-100', '0', '100', '200'];
        expect(yAxisLabels).toBe(yAxisArray);
    });

    // 5.xAxis title 값 가져오기
    test('Get xAxis Title', async ({ page }) => {
        const xAxisTitle = await page
            .locator('.rct-axis[xy="x"] .rct-axis-title')
            .textContent();
        expect(xAxisTitle).toBe('월(1월 - 12월');
    });

    // 6.yAxis title이 안 그려진 거 확인하기
    test('Check yAxis Title not rendered', async ({ page }) => {
        const yAxisTitle = page.locator('.rct-axis[xy="y"] .rct-axis-title');
        const yAxisTitleStyle = await yAxisTitle.evaluate(
            (el) => el.style.display === 'none'
        );
        expect(yAxisTitleStyle).toBeTruthy();
    });

    // 7.Data point가 음수인지 양수인지 확인하기
    test('Check Data Points Sign', async ({ page }) => {
        const dataPoints = await page.locator('.rct-series-point'); // 각 포인트 선택
        const pointCount = await dataPoints.count();

        for (let i = 0; i < pointCount; i++) {
            const pointText = await dataPoints.nth(i).textContent();
            const value = parseFloat(pointText || '0');
            expect(!isNaN(value)).toBeTruthy(); // 숫자인지 확인
            if (value > 0) {
                expect(value).toBeGreaterThan(0);
            } else if (value < 0) {
                expect(value).toBeLessThan(0);
            } else {
                expect(value).toBe(0);
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

        // Inverted 후 xAxis와 yAxis의 위치가 반대인지 확인
        expect(xAxisAfter?.height).toBe(yAxisBefore?.height); // xAxis가 수직 위치가 됬는지 확인
        expect(yAxisAfter?.width).toBe(xAxisBefore?.width); // yAxis가 수평 위치가 됬는지 확인
    });

    // 10.Palette 값 변경하기
    test('Change Palette Value', async ({ page }) => {
        await page.locator('label:has-text("Palette")').click();
        const options = page.locator('.mantine-Select-dropdown option');
        const optionCount = await options.count();
        // 옵션 선탣 반복 실행하기
        for (let i = 0; i < optionCount; i++) {
            await options.nth(i).click();
            const selectedPalette = await options.nth(i).textContent();
            console.log(`Selected Palette ${i + 1}:`, selectedPalette);
        }
    });
    //.mantine-j9797q

    // 11.config값 가져오기
    test('Get Config Value', async ({ page }) => {
        await page.locator('label:has-text("코드 보기")').click();
        const config = page.locator('.overflow-guard');
        console.log(config.textContent);
    });

    // 12.스냅샷 저장하기
    test('Chart Snapshot', async ({ page }) => {
        const graph = page.locator('.rct-svg');
        await expect(graph).toHaveScreenshot();
    });
});
