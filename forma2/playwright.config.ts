import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    // Alteração para chamar a execução do arquivo global.setup.ts
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      // name é o nome dado para identificar o projeto
      // testMatch é usado para que os arquivo que terminam com "setup.ts" rodem primeiro que os testes, para salvar o storageStage
    },
    {
      name: 'chromium-projeto2',
      dependencies: ["setup"],
      // testDir define o diretório específico onde os testes para este projeto estão localizados
      testDir: './tests/projeto1',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './playwright/.auth/arquivo-projeto1.json',
      // Especifica um arquivo de estado de armazenamento que será usado para inicializar o estado do navegador (cookies, localStorage, etc.), 
      // permitindo simular um usuário já logado ou um estado específico da aplicação.
      },
    },
    {
      name: 'chromium-projeto2',
      dependencies: ["setup"],
      // testDir define o diretório específico onde os testes para este projeto estão localizados
      testDir: './tests/projeto2',
      use: {
        ...devices['Desktop Chrome'],
        storageState: './playwright/.auth/arquivo-projeto2.json',
      // Especifica um arquivo de estado de armazenamento que será usado para inicializar o estado do navegador (cookies, localStorage, etc.), 
      // permitindo simular um usuário já logado ou um estado específico da aplicação.
      },
    },
    // Outros projetos do navegador
  ],




  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
