<p align="center">

<img src="https://nestjs.com/img/logo_text.svg" width="250" alt="Nest Logo" />

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="200" alt="Nest Logo" />

</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

# SPACE-PROJECT

- O space-project é um projeto incrível desenvolvido para gerenciar galaxyas, planetas e seus viajantes entre elas, possibilitando ainda que esses viajantes
  se comuniquem entre si através de links de reuniões em cada um dos planetas.

- Dos requisitos do desafio foi implementado: React Hooks || styled components || strategy JWT || PostgreSQL || DTO e design patterns || arquitetura de microsserviços e toda a regra de negócio solicitada no desafio.

- Adicionais: Apis já integradas com ELK(apm) || Jenkins || docker || testes unitários e teste de ponta a ponta || changeLog || Http filters(tratamento de erros) || autorização a níveis de api por pipelines || migrations e seeders || swagger || Helmet.

- Usuário padrão:
  admin@invillia.com
  987654321

Lista de funcionalidades space-api:

- @Route("") -> Retorna um status 200 (GET);

- @Route("traveler/create") -> Cadastra um viajante (POST);
- @Route("traveler/:id") -> Atualiza um determinado viajante (PATCH);
- @Route("traveler") -> Consulta um ou mais viajantes (GET);
- @Route("traveler/:id") -> Deleta um viajante (DELETE);

- @Route("planet/meeting/join") -> Ingressa um determinado viajante numa reunião (POST);

- @Route("galaxy") -> Consulta todas as galaxyas, seus planetas e os viajantes desses planetas (GET);

Lista de funcionalidades auth-api:

- @Route("") -> Retorna um status 200 (GET);

- @Route("auth") -> Realiza login de um viajante (POST);
- @Route("logout") -> Realiza logout de um viajante (PATCH);
- @Route("profile") -> Consulta informações do usuário logado através do token da requisição (GET);

## 🛠️ Apis construídas com

- [NestJS](https://nestjs.com/) - Framework
- [TypeScript](https://www.typescriptlang.org/) - Linguagem
- [VsCode](https://code.visualstudio.com/) - IDE Code
- [TypeORM](https://typeorm.io/#/) - Gerenciador de entidades

## 🛠️ Front construído com

- [ReactJS](https://pt-br.reactjs.org/) - Framework
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem
- [VsCode](https://code.visualstudio.com/) - IDE Code

## 📖 Sumário

- [Pré-requisitos](#Pré-requisitos)
- [Instalando](#Instalando)
- [Migrations](#Migrations)
- [Docker](#Docker)
- [Tests](#Tests)
- [Estrutura de código](#Padronização-de-codigo)

# 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

# 📋 Pré-requisitos

- docker
- docker-compose
- npm
- git
- VSCode

# 🏋🏼‍♀️ Contribuindo

Para contribuir com o projeto, é interessante que se crie sempre novas branchs para cada modificação:

```
git checkout {nome-da-brach} -b
```

# 🔧 Instalando

Clonar o repositório

```
git clone https://github.com/vitorbgouveia/space-project-invillia.git
```

Acessar diretório raiz e executar:

```
. ./start-project.sh
```

Acessar no navegador:

```
http://localhost:3003
```

Show!!! Você agora já tem tudo configurado e está pronto para navegar no espaço e conhecer novas pessoas.

Para conhecer as rotas da aplicação através de um swagger, basta acessar:

```
http://localhost:3000/api-docs/
http://localhost:3001/api-docs/
```

# 🗄️ Migrations

É uma forma de versionar o schema de sua aplicação. Os Migrations trabalham na manipulação da base de dados: criando, alterando ou removendo. É forma de controlar as alterações do seu banco juntamente com o versionamento de sua aplicação.

Gerando novo arquivo de migrations:

```
ambiente: localhost | development | test | homologation | production
```

```
env={{ambiente}} npm run migration:generate -- -n "nome do arquivo"
```

Executando migrations:

```
env={{ambiente}} npm run migration:run
```

Revertendo última migration executada:

```
env={{ambiente}} npm run migration:revert
```

Revertendo todas as migrations:

```
env={{ambiente}} npm run migration:revert-all
```

# 📦 Docker

Docker é um conjunto de produtos de plataforma como serviço que usam virtualização a nível de sistema operacional para entregar software em pacotes chamados contêineres.
Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

Levantar container `docker-compose up`

Abrir no navegador `http://localhost:3000`

Swagger no navegador `http://localhost:3000/api-docs/`

Para levantar o container (desenvolvimento):

```
docker-compose up -d --b
```

Para levantar o container (produção):

```
docker-compose -f ./docker-compose.prod.yaml up -d --b
```

# 🔩 Tests

O teste de APIs é um tipo de teste de software focado em determinar se as APIs desenvolvidas vão de encontro às expectativas relativamente à funcionalidade, confiabilidade, performance e segurança da aplicação.

Ao executar o comando npm run test a aplicação irá buscar todos os arquivos que possuem o sufixo .spec.ts e executá-los.

Ao executar o comando npm run test:e2e a aplicação irá buscar todos os arquivos que possuem o sufixo .e2e-spec.ts.ts e executá-los.

Os arquivos com sufixo .spect.ts por padrão são arquivos de testes unitários.

Os arquivos com sufixo .e2e-spect.ts por padrão são arquivos de testes de funcionalidade.

Para executar testes unitários:

```
npm run test
```

Para executar testes unitários com relatório de cobertura de código:

```
npm run test:cov
```

Para executar testes de funcionalidade:

```
npm run test:e2e
```

# 🖇️ Colaboradores

- **Vitor Gouveia** - _Desenvolvimento_ - [Vitor Gouveia](https://github.com/vitorbgouveia)

Você também pode ver a lista de todos os [colaboradores](https://github.com/vitorbgouveia/space-project/graphs/contributors) que participaram deste projeto.
