import { test as baseTest, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

type pages={
    homePage :HomePage
}

const testPages = baseTest.extend<pages>({
    homePage: async({page}, use) => {
        await use(new HomePage(page));
    }
})

export const test = testPages;
export { expect };

