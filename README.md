# Koa-api-scaffold

This repository is created to be used as a base for Koa + Typescript APIs.

## Getting started
1. Clone repository `git clone --depth 1 git@github.com:truepill/koa-api-scaffold.git my-new-api`
2. Remove current git configuration `rm -rf .git`
3. Initialize your own git repository `git init`
5. Remove all the `README.md` files from inside directories.
6. Modify this `README.md` file so it's relevant to your new app.
7. Read and then delete `ADR.md` file so it's relevant to your new app. Be ready to keep your own ADRs.
7. Read and then delete `CHANGELOG.md` file so it's relevant to your new app. Be ready to keep your own CHANGELOG.
9. Add files, create a first commit and push to your repository.

## Running Locally
1. Install dependencies: `yarn`
2. Run locally `docker-compose up --build`
3. A launcher option "Debug: Docker api" is provided to debug docker app.

You also have the option to run it locally without docker by using the command `yarn start:dev`.

### Useful links
- [Koa](https://koajs.com/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest#readme)
- [Pino logger](https://github.com/pinojs/pino)
- [Joi validation](https://joi.dev/)

### Production
An example Dockerfile for a production build is already provided to be modified as required.
You will find two build blocks( one commented out). One shows a single stage build while the second one provides a two-stage build process.

### Testing
The app comes with `Jest` configured and `supertest`.
Use `yarn test` to run all tests.

#### Why supertest
Supertest was picked as the default HTTP tester in order to provide a consistent testing approach across different projects. Working on top of `superagent`, it provides a sane way of testing HTTP endpoints in our APIs without having to start an instance of the app manually.

### Linting
The repository is already configured to used "airbnb-typescript/base".
You can run `yarn lint` to lint the project.
Prettier is not being used. Prettier was left out of the scaffold as ESLint already provides formatting capabilities and we avoid any conflicts between the two.
VSCode settings are already configured to fix formatting issues on save according to eslint config.

### OpenAPI and Swagger
The app uses `koa-swagger-decorator` which wraps `koa-router` in order to provide auto generated OpenAPI specs using decorators. Please look at the controllers for examples. Read the [docs](https://github.com/Cody2333/koa-swagger-decorator)
Using this package to handle routing allows to specify OpenAPI specs as part of the route configuration. By doing it this way, the code defines the docs and we avoid keeping manually created docs in sync with the actual implementation.

### Configuration
The app uses `convict` for configuration. Please take a look at the [docs](https://github.com/mozilla/node-convict/tree/master/packages/convict).
Convict provides a sane and straightforward way to handle environment variables and defaults, allowing for stacking and merging of configurations.

### Logging
We provide an out of the box logging tool. Import `logger` and use `logger.info()`. It's using [`pino`](https://github.com/pinojs/pino) behind the scenes.
Logging during development will be pretty-formatted for the console, while it will be pure json for production and other environments.
The logger already includes a requestId property to keep track of which request each log message belongs to.

### Validation
We provide a [Joi](https://github.com/sideway/joi) validator middleware out of the box. Joi provides a flexible schema description language with solid validation.

### ADRs
An Architectural Decision Record (ADR) captures a single AD, such as often done when writing personal notes or meeting minutes; the collection of ADRs created and maintained in a project constitute its decision log. Please read more about them [here](https://adr.github.io/)

### CHANGELOG
A change log is a file which contains a curated, chronologically ordered list of notable changes for each version of a project.