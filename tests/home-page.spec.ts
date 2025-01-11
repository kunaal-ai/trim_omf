import { test, expect } from '../fixtures/myFixtures';

test.beforeEach(async ({ page, homePage }) => {
    await homePage.goto();
});

test.describe('home page elements visibility true', () => {
    test('go to url and varify logo', async ({ page, homePage }) => {
        await expect(homePage.heading).toBeVisible();
    });

    test('header elements are visible', async ({ page, homePage }) => {
        await expect(homePage.signin).toBeVisible();
        await expect(homePage.signup).toBeVisible();
    });

    test('signin options are visible', async ({ page, homePage }) => {
        await expect(homePage.signin_with_google).toBeVisible();
        await expect(homePage.signin_with_facebook).toBeVisible();
    });
});