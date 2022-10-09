# Projeto Trybesmith

O Trybesmith foi o 27ª projeto feito pela Trybe, onde foi desenvolvida uma loja de itens medievais, no formato de uma _API_, utilizando _Typescript_.

Nesta aplicação, foi utilizado o conceito de camadas (_Models_, _Service_ e _Controllers_) e, por meio dela, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados (Criação, Leitura, Atualização e Exclusão, conhecidas como `CRUD`).

Para tal, foram criados _endpoints_ que tem como função ler e escrever em um banco de dados, utilizando o **MySQL**.

O código para cadastro de pessoas usuárias foi criado utilizando os conhecimentos adquiridos nesse bloco voltados a Typescript.
  

## Requisitos cumpridos neste projeto

## 1 - Crie um endpoint para o cadastro de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

- Os produtos enviados devem ser salvos na tabela `Products` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível cadastrar um produto com sucesso]**
    - O resultado retornado para cadastrar o produto com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:
    ```json
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
      }
    ```



</details>

---

## 2 - Crie um endpoint para a listagem de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível listar todos os produtos com sucesso]**
    - O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
    [
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Escudo do Herói",
        "amount": "100 diamond",
        "orderId": 1
      }
    ]
    ```
</details>

---

## 3 - Crie um endpoint para o cadastro de pessoas usuárias

- O endpoint deve ser acessível através do caminho (`/users`);

- As informações de pessoas usuárias cadastradas devem ser salvas na tabela `Users` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível cadastrar a pessoa usuária com sucesso]**
    - Se a pessoa usuária for cadastrada com sucesso, o resultado deverá ser conforme o exibido abaixo, com um _status http_ `201` e retornando um _token_:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
    ```



</details>

---

## 4 - Crie um endpoint para listar todos os pedidos

- O endpoint deve ser acessível através do caminho (`/orders`).
- Essa rota deve retornar todos os pedidos e os `id`s dos produtos associados a estes.

✨ **Dica:** Todos os produtos são itens artesanais, portanto, únicos. Por isso são os produtos que contêm os `id`s dos pedidos.

✨ **Dica:** Pesquise na documentação oficial do **MySQL** sobre a função de agregação `JSON_ARRAYAGG`, ela pode ser bem útil. 😉

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para orders

  - **[Será validado que é possível listar todos os pedidos com sucesso]**
    - Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
      [
        {
          "id": 1,
          "userId": 2,
          "productsIds": [1, 2]
        },
        {
          "id": 2,
          "userId": 1,
          "productsIds": [3, 4]
        }
      ]
    ```
</details>

---

## 5 - Crie um endpoint para o login de pessoas usuárias

- O endpoint deve ser acessível através do caminho (`/login`).

- A rota deve receber os campos `username` e `password`, e esses campos devem ser validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```

**⚠️ Na configuração do `JWT` não use variáveis de ambientes para não ter conflito com o avaliador.**

<details close>
 <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para caso haja problemas no login
  - **[Será validado que o campo "username" é enviado]**
    - Se o _login_ não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"username\" is required" }
    ```

  - **[Será validado que o campo "password" é enviado]**
    - Se o _login_ não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400`
    ```json
      { "message": "\"password\" is required" }
    ```

  - **[Será validado que não é possível fazer login com um username inválido]**
    - Se o _login_ tiver o username inválido, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Username or password invalid" }
    ```

  - **[Será validado que não é possível fazer login com uma senha inválida]**
    - Se o login tiver a senha inválida, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Username or password invalid" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível fazer login com sucesso]**
    - Se o login foi feito com sucesso, o resultado deverá ser um _status http_ `200` e deverá retornar um _token_:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
    ```
</details>

---

## Requisitos Bônus

## 6 - Crie as validações dos produtos

- Vamos realizar as validações referentes a criação do endpont do requisito 1?

- Neste requisito de validação, não é necessário conectar com o banco de dados

<details close>

  <summary>As seguintes validações deverão ser realizadas:</summary>

  <br>

  > 👉 Para name
  - **[Será validado que o campo "name" é obrigatório]**
    - Se o campo "name" não for informado, o resultado retornado deverá ser um  _status http_ `400` e
    ```json
      { "message": "\"name\" is required" }
    ```

  - **[Será validado que o campo "name" tem o tipo string]**
    - Se o campo "name" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"name\" must be a string" }
    ```

  - **[Será validado que o campo "name" é uma string com mais de 2 caracteres]**
    - Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"name\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para amount
  - **[Será validado que o campo "amount" é obrigatório]**
    - Se o campo "amount" não for informado, o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"amount\" is required" }
    ```

  - **[Será validado que o campo "amount" tem o tipo string]**
    - Se o campo "amount" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"amount\" must be a string" }
    ```

  - **[Será validado que o campo "amount" é uma string com mais de 2 caracteres]**
    - Se o campo "amount" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"amount\" length must be at least 3 characters long" }
    ```

  <br>

</details>


---

## 7 - Crie as validações para as pessoas usuárias

- Vamos realizar as validações referentes a criação do endpont do requisito 3?

- Neste requisito de validação, não é necessário conectar com o banco de dados

<details close>
  <summary>As seguintes validações deverão ser realizadas:</summary>

  <br>

  > 👉 Para username
  - **[Será validado que o campo "username" é obrigatório]**
    - Se a requisição não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"username\" is required" }
    ```

  - **[Será validado que o campo "username" tem o tipo string]**
    - Se o campo "username" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"username\" must be a string" }
    ```

  - **[Será validado que o campo "username" é uma string com mais de 2 caracteres]**
    - Se o campo "username" não for do tipo `string` com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"username\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para classe
  - **[Será validado que o campo "classe" é obrigatório]**
    - Se a requisição não tiver o campo "classe", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"classe\" is required" }
    ```

  - **[Será validado que o campo "classe" tem o tipo string]**
    - Se o campo "classe" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"classe\" must be a string" }
    ```

  - **[Será validado que o campo "classe" é uma string com mais de 2 caracteres]**
    - Se o campo "classe" não for do tipo `string` com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"classe\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para level
  - **[Será validado que o campo "level" é obrigatório]**
    - Se a pessoa usuária não tiver o campo "level", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"level\" is required" }
    ```

  - **[Será validado que o campo "level" tem o tipo number]**
    - Se o campo "level" não for do tipo `number`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"level\" must be a number" }
    ```

  - **[Será validado que o campo "level" deve ser um número maior que 0]**
    - Se o campo "level" não for do tipo `number` maior que 0, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"level\" must be greater than or equal to 1" }
    ```

  <br>

  > 👉 Para password
  - **[Será validado que o campo "password" é obrigatório]**
    - Se a requisição não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"password\" is required" }
    ```

  - **[Será validado que o campo "password" tem o tipo string]**
    - Se o campo "password" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"password\" must be a string" }
    ```

  - **[Será validado que o campo "password" é uma string com 8 ou mais caracteres]**
    - Se o campo "password" não for do tipo `string` com mais de 8 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"password\" length must be at least 8 characters long" }
    ```

  <br>


</details>

---
