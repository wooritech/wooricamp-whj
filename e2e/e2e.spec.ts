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
        const yAxisTitleStyle = await yAxisTitle.evaluate(
            (el) => el.style.display === 'none'
        );
        expect(yAxisTitleStyle).toBeTruthy();
    });

    // 7.Data point가 음수인지 양수인지 확인하기
    test('Check Data Points Sign', async ({ page }) => {
        const yAxisZeroPosition = await page.evaluate(() => {
            const yAxisZeroLabel = Array.from(
                document.querySelectorAll(
                    '.rct-axis[xy="y"] .rct-axis-labels .rct-axis-label tspan'
                )
            ).find((el) => el.textContent === '0'); // y축 0 기준선 잡기

            if (!yAxisZeroLabel) throw new Error('Y-axis zero label not found');

            // Y축 0 레이블 요소의 Y 좌표 반환
            return yAxisZeroLabel.getBoundingClientRect().top;
        });
        const dataPoints = await page.locator('.rct-series-point'); // 각 포인트 선택
        const pointCount = await dataPoints.count();

        for (let i = 0; i < pointCount; i++) {
            const pointYPosition = await dataPoints
                .nth(i)
                .evaluate((el) => el.getBoundingClientRect().top);

            if (pointYPosition < yAxisZeroPosition) {
                expect(pointYPosition).toBeLessThan(yAxisZeroPosition);
            } else if (pointYPosition > yAxisZeroPosition) {
                expect(pointYPosition).toBeGreaterThan(yAxisZeroPosition);
            } else {
                expect(pointYPosition).toBe(yAxisZeroPosition);
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
    test('Change Palette Value', async ({ page }) => {
        const options = page.locator('.mantine-Select-dropdown option');
        const optionCount = await options.count();
        // 옵션 선택 반복 실행하기
        for (let i = 0; i < optionCount; i++) {
            await page.locator('label:has-text("Palette")').click();
            await options.nth(i).click();
            await options.nth(i).textContent();
        }
    });

    // 11.config값 가져오기
    test('Get Config Value', async ({ page }) => {
        await page.locator('label:has-text("코드 보기")').click();
        const config = page.locator(
            '.overflow-guard .monaco-scrollable-element .view-lines'
        );
        console.log(config.textContent);
    });

    // 12.스냅샷 저장하기
    test('Chart Snapshot', async ({ page }) => {
        const graph = page.locator('.rct-svg');
        await expect(graph).toHaveScreenshot();
    });
});
