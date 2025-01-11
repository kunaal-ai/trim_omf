import { chromium, FullConfig } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config();
const useremail:string = process.env.USEREMAIL!
const password:string = process.env.PASSWORD!

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!);
  console.log('🏁 BASE url: '+ baseURL)
  
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sign In', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('Email').fill(useremail);
  await page1.getByPlaceholder('Password').fill(password);
  await page1.getByRole('button', { name: 'Log in', exact: true }).click();
  
  console.log('🗝️ Credentials ')
  console.log('✅ User Loged in')

  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;