# Alicunde Bakcend - Cristian Moreno 💻

- Built with Node.js and Express
- Typescript
- Prisma ORM
- REST API

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Volta.sh](https://dev.to/khriztianmoreno/introduccion-a-volta-la-forma-mas-rapida-de-administrar-entornos-de-node-1oo6)
-  [Node.js and npm](https://nodejs.org) Node >= 18.12 LTS, npm >= 8.19.x - Install with Volta.sh

## Express Router and Routes

| Route               | HTTP Verb | Route Middleware   | Description                          |
| --------------------| --------- | ------------------ | ------------------------------------ |
| /api/healthcheck    | GET       |                     | Show a simple message                |
| /api/authors          | GET       |                     | Get list of authors                    |
| /api/authors          | POST      |                    | Creates a new author                  |
| /api/authors/:id      | GET       |                     | Get a single author                   |
| /api/authors/:id      | DELETE    |                     | Deletes a author                       |


### Developing

1. Run `npm install` to install server dependencies.

2. Configure the env
```shell
$ cp .env.example .env
```

3. Update `.env` with the required info

4. Run `npm run dev` to start the development server.


#### Convention

- [Commit Message Convention](https://www.conventionalcommits.org/en/v1.0.0/)
- [Git Flow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
- [Git Commit Emoji](https://gitmoji.dev/)


## License

[MIT](LICENSE)
