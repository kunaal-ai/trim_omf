
import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly heading;
    readonly signin;
    readonly signup;
    readonly signin_with_google;
    readonly signin_with_facebook;

    constructor(page: Page){
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'Join 3M+ people who\'ve used' });
        this.signin = page.getByRole('link', { name: 'Sign In', exact: true });
        this.signup = page.getByRole('navigation').getByRole('link', { name: 'Sign Up' });
        this.signin_with_google = page.getByRole('link', { name: 'Sign in with Google' });
        this.signin_with_facebook = page.getByRole('link', { name: 'Sign in with Facebook' });
    }

    async goto(){
        await this.page.goto("https://www.asktrim.com/")
    }
    

}