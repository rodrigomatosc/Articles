# Articles

![me](https://github.com/rodrigomatosc/Articles/blob/main/app.gif)

video em uma resolução melhor: ![me](https://github.com/rodrigomatosc/Articles/blob/main/Screen_Recording_20220920-194154_Articles.mp4)

## Features

- Consome a api https://newsapi.org/ e mostra uma lista de artigos com algumas informações.

## Architecture

Sei que para a feature este tipo de arquitetura não se faz necessário, mas resolvi colocar mais ou menos como já trabalhei alguns projetos.
Tento sempre dividir em features ou módulos tornando assim cada parte da aplicação o mais isolada possível. Cada módulo do projeto tem components, screens e suas rotas, dessa forma consiguimos dividir o que é algo apenas da feature ou o que é usado em toda aplicação, a seguir demonstro a árvore dos ficheiros nesse projeto:

```shell
  ├── src
      └── components
      └── modules
            └── Home
                └── screens
                └── components
                └── navigator
                └── ....
      └── App.tsx
  ├── index.js
  └── __tests_

```

Outra particularidade que acho bem válido utilizar é a divisão de cada screen em 3 partes, container, screen e view:

Container: possuí toda a lógica e consulta a dados (chamadas ao redux, requests) do componente, isso facilita os testes de integração.

View: possuí toda parte visual do componente, toda e qualquer lógica deve ser transferida para a camada de container, temos assim a facilidade de manutenções e também na aplicação de testes de E2E e a integração de bibliotecas como o storybook

Screen: é a camada que encapsula todas as outras e cuida da interação da navegação da app com as screens, exemplo: quando navegamos para uma tela e precisamos recever algum dado de outra é nessa camada que vamos recuperar esta informação e passar para as outras.

## Improvements

Aqui vou destacar algumas coisas que eu faria caso estivesse a trabalhar em um projeto semelhante:
Um dos pontos que alteraria seria a recuperação de todos os artigos, em mobile quanto menos informações temos para carregar melhor, então implementaria um lazy load nesta parte.

Como se tratam de artigos creio que seria uma boa a atualização de tempos em tempos, para isso usaria uma lib chamada react-query para gerenciar meus requests.

Se tratando de design trabalharia com o styled-components e tentaria definir um thema e centralizaria algumas coisas como cores e fontes.

No container tenho a url para o request na classe, em projetos reais estaria em um .env com a apikey dividindo em prod e dev.

Costumo também fazer testes unitarios em cada componente e teestes E2E com detox nas screens.
