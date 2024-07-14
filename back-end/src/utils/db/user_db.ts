import knex from "knex";
import dotenv from 'dotenv';

dotenv.config();

const knexInstance = knex({
  client: "pg",
  connection: {
    user: process.env.USER_PG_USER,
    host: process.env.USER_PG_HOST,
    database: process.env.USER_PG_DATABASE,
    password: process.env.USER_PG_PASSWORD,
    port: Number(process.env.USER_PG_PORT),
    ssl: false,
  },
});

export default knexInstance;