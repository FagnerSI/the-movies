# The Movies

Este é um projeto React criado usando [Create React App](https://create-react-app.dev/). Ele serve como uma aplicação básica com estrutura inicial e dependências configuradas para desenvolvimento e construção.

## 📋 Índice

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Pré-requisitos](#pré-requisitos)
4. [Instalação](#instalação)
5. [Micro front](#micro-front)

## 📝 Sobre o Projeto

O projeto **the-movies** é uma aplicação web construída em React. Ele é desenvolvido para fornecer uma interface simples e eficiente para usuários buscarem, ver detalhes e favoritarem filmes consumindo a API do [themoviedb.org](https://developer.themoviedb.org/reference/intro/getting-started). O projeto centraliza duas outras aplicações: [movies-search](https://github.com/FagnerSI/movies-search.git) e [movies-details](https://github.com/FagnerSI/movies-details.git).

Acesse o [link do figma](https://www.figma.com/design/HNcdCA7ahAHMTzrcQT07mV/Search-Movies?m=auto&t=zdbxSGZss3fulLU2-1) e veja o projeto de interface.

## 🚀 Funcionalidades

- Pesquisa de filmes.
- Ver detalhes de filmes.
- Adicionar filmes a lista de favoritos.
- Listagem de filmes favoritos.
- Integração com API externa.

## 🛠 Pré-requisitos

Para executar o projeto localmente, você precisará das seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## 💻 Instalação

Antes de iniciar está aplicação, siga os passos de instalação e inicialização dos seguintes projetos:

- [movies-search](https://github.com/FagnerSI/movies-search.git)
- [movies-details](https://github.com/FagnerSI/movies-details.git)

Após ter estas aplicações incializadas, siga os passos abaixo para rodar o projeto em sua máquina local:

1. Clone o repositório:

   ```bash
   git clone https://github.com/FagnerSI/movies-search.git

   ```

2. Entre no diretório do projeto:
   cd the-movies-host

3. Instale as dependências:
   npm install

4. Inicie o servidor de desenvolvimento:
   npm start

## Micro front
  
A aplicação the movies usa a estutura de micro frontends, onde ela é a aplicação central que consome duas aplicações remotas. As aplicacões remotas são:
- [movies-search](https://github.com/FagnerSI/movies-search.git) - aplicação de busca de filmes e listagem de favoritos
- [movies-details](https://github.com/FagnerSI/movies-details.git) - aplicação que exibe detalhes de um filme e permite adicona-lo a lista de favoritos

