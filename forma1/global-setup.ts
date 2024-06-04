// Essa é a primera opção, caso só tenhamos uma login global para todos os testes

import { Browser, chromium, expect, Page } from '@playwright/test';


async function globalSetup() {
    
    // Iniciamos uma nova instância do Chrome
    const browser: Browser = await chromium.launch( { headless: false } );

    // Criamos um novo contexto
    const context = await browser.newContext();
    
    // Abrimos uma nova página
    const page: Page = await context.newPage()

    // Adicionamos a página do site e as informações de login
    // Em nosso exemplo estamos usando a página Swag Labs como exemplo
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');    

    // Após isso, iremos adicionar onde iremos salvar o storageState do login
    await page.context().storageState( { path: "./loginAuth.json" } )

    await expect(page).toHaveTitle('Swag Labs')

    // Fechando o Browser
    await browser.close();

}

export default globalSetup;

// Após isso, iremos adicionar um 'globalSetup' no arquivo de config do playwright com o nome desse arquivo
// Após isso, o estado de autenticação estara salva na raiz do projeto. 