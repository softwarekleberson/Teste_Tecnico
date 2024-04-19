# API REST utilizando Node.js

Este projeto consiste na criação de uma API REST utilizando Node.js. A API oferece suporte para gerenciar as seguintes entidades: Categoria, Tipo de Pagamento e Despesa. A estrutura do projeto é organizada em diferentes diretórios, incluindo controllers, database, entity, repository, router, app e server.

## Estrutura do Projeto

- **controllers**: Contém os controladores responsáveis por manipular as requisições HTTP.
- **database**: Configurações e scripts relacionados ao banco de dados.
- **entity**: Definições das entidades do sistema.
- **repository**: Lógica de acesso aos dados.
- **router**: Configurações das rotas da API.
- **app**: Configurações e inicialização da aplicação.
- **server**: Arquivo de inicialização do servidor.

## Rotas

### GET

- **Tipo Pagamento**: `/api/tipo`
- **Categoria das Contas**: `/api/categoria`
- **Listar as Contas Vigentes no Mês**: `/api/despesa`

### POST

- **Criação da Categoria**: `/api/categoria`
- **Criação da Despesa**: `/api/despesa`
- **Criação da Tipo Pagamento**: `/api/localhost:3000/api/tipo`

## Requisitos

- **Node.js Version**: 20.12.2 LTS
- **Banco de Dados**: MySQL

## Instruções de Uso

1. Certifique-se de ter o Node.js e o MySQL instalados em seu sistema.
2. Clone este repositório.
3. Configure o banco de dados de acordo com as configurações em `database`.
4. Execute `npm install` para instalar as dependências.
5. Inicie o servidor com `npm run dev`.
6. Utilize as rotas mencionadas para interagir com a API.
