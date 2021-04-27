/**
 * This file hold's configurations like:
 * database connection details, rows per page for pagination, etc.
 */

const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || "localhost",
    user: env.DB_USER || "root",
    password: env.DB_PASSWORD || "s3cr3t",
    database: env.DB_NAME || "pl_rest_api",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
