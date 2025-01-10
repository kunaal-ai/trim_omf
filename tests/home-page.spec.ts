import { test, expect, type Page } from '@playwright/test';
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.asktrim.com/');
  });
test.describe('home page elements visibility true', () => {
    test('go to url and varify logo', async ({ page }) => {
        await page.getByRole('heading', { name: 'Join 3M+ people who\'ve used' }).click();
    });

    test('header elements are visible',async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Sign In', exact: true })).toBeVisible();
        await expect(page.getByRole('navigation').getByRole('link', { name: 'Sign Up' })).toBeVisible();

    });

    test('test elements', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Join 3M+ people who\'ve used' })).toBeVisible();
        await expect(page.getByRole('banner').getByRole('link').first()).toBeVisible();
        await expect(page.getByRole('link', { name: 'Find My Subscriptions' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Sign in with Google' })).toBeVisible();
        await page.getByRole('link', { name: 'Sign in with Facebook' }).click();
    });
});