import { test, expect } from '@playwright/test';

test.describe('Chart Testing', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.realchart.co.kr/demo/Basic/basic-bar');
    });

    // Title 값 가져오기
    test('Get Title', async ({ page }) => {
        const title = await page.locator('.rct-title').textContent();
        console.log('Title:', title);
    });

    // Subtitle 값 가져오기
    test('Get Subtitle', async ({ page }) => {
        const subtitle = await page.locator('.rct-subtitle').textContent();
        console.log('Subtitle:', subtitle);
    });

    // xAxis label 값 배열로 가져오기
    test('Get xAxis Labels', async ({ page }) => {
        const xAxisLabels = await page
            .locator('.rct-axis[xy="x"] .rct-axis-labels')
            .textContent();
        console.log('xAxis Labels:', xAxisLabels);
		});
	
    // yAxis label 값 배열로 가져오기
    test('Get yAxis Labels', async ({ page }) => {
        const yAxisLabels = await page
            .locator('.rct-axis[xy="y"] .rct-axis-labels')
            .textContent();
        console.log('yAxis Labels:', yAxisLabels);
    });

    // xAxis title 값 가져오기
    test('Get xAxis Title', async ({ page }) => {
        const xAxisTitle = await page
            .locator('.rct-axis[xy="x"] .rct-axis-title')
            .textContent();
        console.log('xAxis Title:', xAxisTitle);
    });

    // yAxis title 이 안 그려진 거 확인하기
    test('Check yAxis Title not rendered', async ({ page }) => {
        const yAxisTitle = await page
            .locator('.rct-axis[xy="y"] .rct-axis-title')
            .textContent();
        expect(yAxisTitle).toBeFalsy();
    });

    // Data point가 음수인지 양수인지 확인하기
    test('Check Data Points Sign', async ({ page }) => {
        const dataPoints = await page.locator('.rct-series-point'); // 각 포인트 선택
        const pointCount = await dataPoints.count();

        for (let i = 0; i < pointCount; i++) {
            const pointText = await dataPoints.nth(i).textContent();
            const value = parseFloat(pointText || '0');
            console.log(`Point ${i}: ${value}`);
            expect(!isNaN(value)).toBeTruthy(); // 숫자인지 확인
            expect(value).toBeGreaterThanOrEqual(0); // 양수 확인
        }
    });

    // 코드 보기 버튼 클릭해서 config가 보이게 하기
    test('Click View Code Button', async ({ page }) => {
        await page.locator('label:has-text("코드 보기")').click();
        const config = await page.locator('.mantine-Grid-root.mantine-16fdnqw');
        await expect(config).toBeTruthy();
    });

    // Inverted 버튼 클릭하기
    test('Click Inverted Button', async ({ page }) => {
        await page.locator('label:has-text("Inverted")').click();
        const xAxis = await page.locator('.rct-axis[xy="x"]').isVisible();
        const yAxis = await page.locator('.rct-axis[xy="y"]').isVisible();
        expect(xAxis).toBeTruthy();
        expect(yAxis).toBeTruthy();
    });

    // Palette 값 변경하기
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

    // config값 가져오기
    test('Get Config Value', async ({ page }) => {
        await page.locator('label:has-text("코드 보기")').click();
        const config = await page.locator('.mantine-Grid-root.mantine-16fdnqw');
        console.log('Config Value:', config);
    });

    test('Chart Snapshot', async ({ page }) => {
        await expect(page).toHaveScreenshot();
    });
});
