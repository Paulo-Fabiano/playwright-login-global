import test from "@playwright/test";

test('Acessando Swag', async ( { page } ) => {

    await page.goto('https://www.saucedemo.com/v1');
    
})