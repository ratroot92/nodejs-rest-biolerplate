const dotenv = require(`dotenv-safe`);
const path = require('path');

class EnvConfig {
  #currentEnv;

  constructor() {
    this.#currentEnv = process.env.NODE_ENV;
    this.loadEnv();
  }
  loadEnv() {
    dotenv.config({
      path: `${path.resolve(__dirname, `../../.env.${this.#currentEnv}`)}`,
      example: `${path.resolve(__dirname, `../../.env.example`)}`,
      allowEmptyValues: true,
    });
  }
}

module.exports = new EnvConfig();
