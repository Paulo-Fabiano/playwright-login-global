// Imports
import { test } from '@playwright/test';

test('Nome do teste', async ({page}) => {

    // Adicionar o site que iremos fazer login
    await page.goto('inserir URL');
    await page.fill('', '');
    await page.fill('', '');

    // Salvando o estado de autenticação em um arquivo JSON
    await page.context().storageState({path: "./playwright-login-global/forma2/.auth/arquivo-projeto1.json"});

})

