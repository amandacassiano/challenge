# Challenge - Bot de Contato Inteligente da Blip

## Descrição do Projeto

Desenvolvi esse projeto como parte de um desafio técnico para a empresa Blip.

O desafio é criar um chatbot integrado à uma API RESTful na plataforma Blip que lista as informaçs sobre os 5 repositórios na linguagem C# mais antigos da conta da Blip no Github "takenet", ordenados do mais antigo para o mais novo. 
Uma API RESTful em Node.js realizando a integração com a API pública do GitHub para extrair os dados da conta da Blip.
As informações dos repositórios são extraidas da API no Chatbot e renderizadas no formato de Carrossel através da interação Conteúdo Dinâmico.





## Sobre a Estrutura do Projeto
challenge/
Api/     
    server.js           
    package.json       
    package-lock.json   
    .env                      
Flow/                   
    mybotflow.json      

README.md              


## Tecnologias utilizadas

Node.js: Para criação da API.
Render : Escolhi o render para realizar o deploy da api.
Express: Framework para criar endpoints RESTful.
Blip: Plataforma para construção do fluxo conversacional do Chatbot.
Axios: Para consumir a API pública do GitHub.
Ngrok: Utilizei durante os testes.

## Como acessar a API?

No terminal digite:

cd Api

Instale as dependências:

npm install

Inicie o servidor:

node server.js
ou
npm start

Acesse:

http://localhost:3000/repositories

## Como acessar o Chatbot?


Encontre o arquivo contendo o JSON do Chatbot dentro do repositório, no caminho:

Flow/
    mybotflow.json

Siga as instruções para exportar o fluxo no Blip: https://help.blip.ai/hc/pt-br/articles/360059353133-Como-importar-o-fluxo-de-um-bot-no-Builder








