const mongoose = require('mongoose');

const DB_HOST = process.env.MONGO_DB_HOST;
const DB_PORT = process.env.MONGO_DB_PORT;
const DB_NAME = process.env.MONGO_DB_NAME;

const mongodbConfigOptions = {
  /** The name of the database you want to use. If not provided, Mongoose uses the database name from connection string. */

  dbName: DB_NAME,
  /** Set to false to disable automatic index creation for all models associated with this connection. */

  autoIndex: true,
  /** Set to `false` to disable Mongoose automatically calling `createCollection()` on every model created on this connection. */
  autoCreate: true,
  /**
   * Sanitizes query filters against [query selector injection attacks](
   * https://thecodebarbarian.com/2014/09/04/defending-against-query-selector-injection-attacks.html
   * ) by wrapping any nested objects that have a property whose name starts with $ in a $eq.
   */
  sanitizeFilter: true,
  /** username for authentication, equivalent to `options.auth.user`. Maintained for backwards compatibility. */
  /** password for authentication, equivalent to `options.auth.password`. Maintained for backwards compatibility. */
  // user:
  // pass:
  // bufferCommands?: boolean;
};

mongoose.connect(
  `mongod://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  mongodbConfigOptions
);
