## 

Quick Start по PrismaORM - https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb-typescript-mongodb

Схема БД - https://miro.com/app/board/uXjVMvX7JDU=/?share_link_id=301551145164

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Порядок действий для обновления схем БД

1.  ` prisma db pull --force ` см. https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb/introspection-typescript-mongodb
2. `prisma generate `
3. создание сервиса и контроллеров - https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0#create-a-prisma-service

## CRUD

```bash
npx nest generate resource


```
 