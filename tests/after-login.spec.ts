import { test, expect } from '../fixtures/myFixtures';

test.describe("after Login in tests", () => {
  test.use({ storageState: 'state.json' });

  test('test', async ({ page, homePage }) => {
      await page.goto('https://go.asktrim.com/');
      await expect(page.getByText('Connect your accounts to see')).toBeVisible();
      await page.getByRole('button', { name: 'Find Savings' }).click();
      await page.getByText('Add Phone Number').click();
      await page.getByLabel('Close modal').click();
      await expect(page.getByText('Cancel subscriptions')).toBeVisible();

  });
}); 