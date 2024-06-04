
# Primeiro devemos criar dentro da pasta "tests" as pastas dos projetos

# Dentro dessas pastas devemos criar os arquivos de login-global

# Após isso modificar o arquivo "playwright.config.ts"

-> adicionar em projeto os projetos que temos.

Cada projeto contém uma pasta com um arquivo de login global e os testes que usarão esse storageState

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