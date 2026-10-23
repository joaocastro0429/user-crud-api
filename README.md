# User CRUD API

Projeto pessoal de estudo de uma API de usuários com **Node.js, TypeScript e NestJS 11**. Implementa cadastro, listagem, consulta, atualização e exclusão, com armazenamento em memória.

## Escopo atual

- Usuário com `id`, `name` e `email`.
- Separação entre controller e service.
- Dados mantidos em um array: reiniciar o servidor apaga os usuários.
- Sem banco de dados, autenticação ou validação dos campos neste estágio.

Este repositório é um exercício introdutório. Não representa um sistema pronto para produção.

## Executar

Pré-requisitos: Node.js 20 ou superior e npm.

```bash
git clone https://github.com/joaocastro0429/user-crud-api.git
cd user-crud-api
npm ci
npm run start:dev
```

A API fica em `http://localhost:3000`. Para usar outra porta, defina a variável `PORT` antes de iniciar.

## Endpoints

| Método | Rota | Comportamento atual |
| --- | --- | --- |
| POST | `/users` | Cadastra usuário e retorna a mensagem `User created successfully` com status 201 |
| GET | `/users` | Lista os usuários, status 200 |
| GET | `/users/:id` | Retorna o usuário ou o texto `User not found`, status 200 |
| PUT | `/users/:id` | Atualiza nome e e-mail; retorna usuário ou `User not found`, status 201 |
| DELETE | `/users/:id` | Retorna um array com o usuário removido ou o texto `User not found`, status 200 |

O ID é atribuído pelo serviço; não é necessário enviá-lo no corpo. As mensagens de usuário inexistente ainda não usam status 404.

### Exemplo

```bash
curl -i -X POST http://localhost:3000/users \
  -H 'Content-Type: application/json' \
  -d '{"name":"Maria Silva","email":"maria@example.com"}'

curl http://localhost:3000/users
curl http://localhost:3000/users/1

curl -i -X PUT http://localhost:3000/users/1 \
  -H 'Content-Type: application/json' \
  -d '{"name":"Maria Souza","email":"maria@example.com"}'

curl -i -X DELETE http://localhost:3000/users/1
```

O ID 1 é apenas um exemplo. Consulte a listagem para obter os IDs presentes.

## Estrutura

- `src/main.ts`: inicialização do servidor.
- `src/users/users.controller.ts`: rotas HTTP.
- `src/users/users.service.ts`: operações e array de usuários.
- `src/users/user.entity.ts`: estrutura do usuário (não é uma entidade de banco).
- `src/users/*.spec.ts` e `test/`: arquivos de teste do projeto.

## Comandos disponíveis

```bash
npm run build
npm test
npm run test:e2e
```

A existência desses scripts não comprova cobertura das regras do CRUD. Confira os arquivos de teste e a saída da execução antes de tirar conclusões sobre a cobertura.

## Limitações e próximos passos

- Trocar `users.length + 1` por uma geração de IDs que não repita valores depois de exclusões.
- Validar nome e e-mail com DTOs e ValidationPipe.
- Retornar 404 para IDs inexistentes e padronizar os status HTTP.
- Adicionar persistência e testes de comportamento do CRUD.
- Documentar a API com OpenAPI/Swagger.

Esses itens são melhorias planejadas, não funcionalidades já implementadas. O código da API não foi alterado por esta revisão da documentação.
