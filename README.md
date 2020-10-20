## Frontend Test

Fork do repositório [belezanaweb/test-front](https://github.com/belezanaweb/test-front).

### Libs utilizadas

- [Create React App](https://github.com/facebook/create-react-app)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Formik](https://formik.org/docs/overview)
- [axios](https://github.com/axios/axios)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Nock](https://github.com/nock/nock)
- [Express](https://github.com/expressjs/express)


### Rodando os testes

Faça:

```
npm test
```

Se tiver o *yarn* instalado, faça:

```
yarn test
```

### Rodando o projeto

Faça:

```
npm install
npm build
npm serve
```

Se tiver o *yarn* instalado, faça:

```
yarn
yarn build
yarn serve
```
### Épicos e tarefas do projeto (Versão 2)

- **BNW6 - Layout com CSS Grid**
  - Rota /cart
  - Rota /payment
  - Rota /success

- **BNW7 - Formulário**
  - Retirar card validator
  - Recriar com o Formik

### Épicos e tarefas do projeto (Versão 1)

- **BNW1 - Layout das páginas**
  - Estrutura base
  - Tabs
  - Carrinho - Celular
  - Carrinho - Desktop
  - Pagamento - Celular
  - Pagamento - Desktop
  - Sucesso - Celular
  - Sucesso - Desktop
- **BNW2 - Informação da compra**
  - Consumir endpoint
  - Persistir (ContextAPI)
- **BNW3 - Testes unitários**
- **BNW4 - Split bundle**
  - Dividir o bundle com base nas rotas
  - Criar servidor para rodar a aplicação
- **BNW5 - Formulário**
  - Validação dos campos
  - Passando as infos do cartão para a tela de sucesso