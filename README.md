# RESTFUl API com NestJS
API Restful fieta com o framework <a href="https://nestjs.com">NestJS</a><br>
### Esta API utiliza: <br>
<div style="display: inline_block" align="left"><br>
  <img align="center" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" height="60" width="70" src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg">
</div>

# Primeiros passos:
### Primeiramente, você precisa ter o <a href="https://nodejs.org/en/">NodeJS</a> e o <a href="https://www.postman.com/downloads/?utm_source=postman-home">PostMan</a> instalados em sua máquina <br>
#### Para instalar as dependências necessárias, coloque o seguinte comando:
```
npm install
```

# Iniciando o projeto
#### Para iniciar, coloque este comando no terminal:
```
npm run start:dev
```
#### Isso irá iniciar o ambiente de desenvolvimento no endereço `http://localhost:3000/usuarios`

## Entrando no Postman
#### Com o postman instalado, siga estes passos:
### Clique no botão "+" no canto superior para abrir uma request HTTP no Postman
![Capture001](https://user-images.githubusercontent.com/83819836/221372140-27f037a4-e6e0-43c9-911c-dc6ddcf39255.png)
### Coloque o tipo de requisição (`GET` por padrão) e coloque a URL `http://localhost:3000/usuarios` ao lado
### Para enviar a requisição, só clicar no botão "Send"
![Capture001](https://user-images.githubusercontent.com/83819836/221372268-4de7c259-15bf-402a-bf53-11f093243d53.png)

# Como usar

## Requisição POST
### Mude o tipo de requisição para `POST` antes da URL
### Mude a aba para `body`, depois coloque a opção `raw` e mude para `JSON` na última opção, em azul
![Capture001](https://user-images.githubusercontent.com/83819836/221372571-8a33e337-10e4-457e-a876-d7a5cc95c75c.png)
### No BODY, coloque um Objeto JSON, no formato
```
{
  "nome": "nome",
  "email": "email@email.com"
  "senha": "suaSenha123"
}
```
### E aperte em "Send" Para enviar a requisição
### No Body, irá aparecer o `id` referente a este usuário
![image](https://user-images.githubusercontent.com/83819836/221372634-b4876c38-0adb-4548-85e6-d991c8147ab4.png)

## Requisição GET
### Coloque o tipo `GET` na requisição e clique em "Send"
### Isso irá mostrar todos os usuários registrados
![image](https://user-images.githubusercontent.com/83819836/221372721-8cfbe2f7-ccc5-4c96-a9c3-c0bb36140d32.png)

## Requisição PUT (Atualizar)
### Mude o tipo de requisição para `PUT` antes da URL
### Coloque, no final da URL, o `/{id}` com o id do usuario que você quer editar
### Mude a aba para `body`, depois coloque a opção `raw` e mude para `JSON` na última opção, em azul
### No `Body`, coloque um objeto JSON e mude o valor que preferir
![Capture001](https://user-images.githubusercontent.com/83819836/221372925-4506a319-730b-405a-9ada-95cfb9e9fe6b.png)

## Requisição DELETE
### Mude o tipo de requisição para `DELETE` antes da URL
### Coloque na URL um `/{id}` e clique no botão SEND para deletar o item com o referido ID
![Capture001](https://user-images.githubusercontent.com/83819836/221372978-8ec8e25a-9932-4f5c-99fd-7853139dfb99.png)

# Conclusão
#### Este projeto foi feito junto ao curso da <a href="https://www.alura.com.br">Alura</a> Sobre NestJS
#### Obrigado por ler até aqui, fique a vontade para mandar um Pull Request e mudar alguma coisa
#### Se quiser saber mais sobre mim, aqui está o <a href="https://luciano655dev.netlify.app">meu Portfolio</a>
