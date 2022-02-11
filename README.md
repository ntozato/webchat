
# Boas vindas ao repositório do projeto WebChat!

## Por que gosto desse projeto?

Nesse projeto fui capaz de:

- Desenvolver um server socket usando o socket.io;

- Emitir eventos personalizados usando o socket.io;

- Usar o pacote `socket.io` do Node.js para criar aplicações que trafeguem mensagens através de sockets.

- Utilizar o MongoDB para elaborar o histórico de mensagens

## Características do projeto
Neste projeto foi desenvolvido um chat online e ao utilizar essa aplicação um usuário deverá ser capaz de:

 - Usar um front-end para enviar mensagens a clientes conectados;
 - Visualizar o histórico de mensagens da conversa;
 - Visualizar os usuários online no momento;
 - Alterar o nome de usuário no chat em tempo real;

## Instalação do projeto localmente

1. Clone o repositório:

   - git clone https://github.com/ntozato/webchat.git
   - Entre na pasta do repositório que você acabou de clonar:
     - webchat

2. Instale as dependências:
   
   - npm install

## Variáveis

Haverá um arquivo no caminho: `webchat/models/connection.js` que fará a conexão com o Banco de Dados. Neste arquivo, na linha 9, haverá o seguinte comando:

`.connect(process.env.DB_URL, {`

e na linha 13:

`.then((conn) => conn.db(process.env.DB_NAME))`

**Você irá precisar configurar as variáveis globais do MongoDB.**

Crie um arquivo .env na raiz do projeto e as seguintes variáveis com seus respectivos valores:

```
DB_URL=mongodb://localhost:27017/webchat/    // conexão local com o seu MongoDB
DB_NAME=webchat                             // nome do database
```

**Após feitas as configurações anteriores, inicie o projeto com npm start no terminal e localhost:3000 no navegador**
