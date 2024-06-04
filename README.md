# Plawright 

No framework de testes Playwright, existem várias maneiras de configurar um login global para múltiplos testes em uma página. Essa abordagem evita que múltiplas requisições sejam feitas em um curto espaço de tempo, prevenindo o sobrecarregamento do servidor.

Hoje, apresentarei duas maneiras de configurar um login global no Playwright: 

1. Utilizando um arquivo global na raiz do projeto.
2. Separando a configuração para diferentes logins, caso necessário.