# Challenge - Bot de Contato Inteligente da Blip

## Descrição do Projeto
Este projeto foi desenvolvido como parte de um desafio técnico para a empresa Blip.
Um chatbot integrado à uma API RESTful, criado na plataforma Blip com um fluxo conversacional que apresenta os 5 repositórios mais antigos do Github da Blip "takenet", que estiverem na linguagem C#.
Uma API RESTful em Node.js, que consome a API pública do GitHub e busca os dados da conta takenet da Blip no Github.
As informações dos repositórios são extraidas no Chatbot e exibidas no formato de Carrossel.





## Sobre a Estrutura do Projeto
challenge/
├── Api/                    
│   ├── server.js           # Arquivo principal da API
│   ├── package.json        # Configurações e dependências do projeto
│   ├── package-lock.json   # Controle de versões das dependências
│   ├── .env                # Variáveis de ambiente
│   └── README.md           # Documentação detalhada da API
├── Flow/                   
│   └── mybotflow.json      # Json do fluxo completo
└── README.md  


## Tecnologias utilizadas

Node.js: Para criar a API intermediária.
Express: Framework para criar endpoints RESTful.
Blip: Plataforma para construção do chatbot.
Axios: Para consumir a API pública do GitHub.

## Como iniciar o projeto?

Entre no diretório Api:

cd Api

Instale as dependências:

npm install

Inicie o servidor:

node server.js

Acesse:

http://localhost:3000/repositories

## Como acessar o Chatbot?


Encontre o arquivo contendo o JSON do Chatbot no caminho:

Flow/mybotflow.json.

Siga as instruções para importar e exportar o fluxo no Blip: https://help.blip.ai/hc/pt-br/articles/360059353133-Como-importar-o-fluxo-de-um-bot-no-Builder








