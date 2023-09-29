# nodejs-e2e-testing-with-no-framework

## About

Project initially created because of the Erick Wendel [video about the node.js test runner](https://www.youtube.com/watch?v=xSDJnj-pgxU), which doesn't need any framework to perform unit and e2e tests.

These features are not in the node.js LTS version yet but probably will come in the next versions.

The version used was the 19.8.1.

## Running the project

**Prerequisites**: Node.js v19.8.1, npm v9.8.1.

Running this code is simple as cloning the repo, running the `npm i` to install the dependencies and then running `npm run test` to see the tests results or `npm run test:dev` to run the tests in watch mode.

## Conclusion

Having a way of testing directly from the native platform is great. I haven't tested complex situations for comparison with famous frameworks like Jest but I think that currently we need to wait for the next improvements on this module to use it in a production environment. The simple fact of not being in the LTS version already says that but even if it was in production, we still don't have all the tools that others frameworks have.
