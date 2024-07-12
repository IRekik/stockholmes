import knex from "knex";
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.PG_PASSWORD);

const knexInstance = knex({
  client: "pg",
  connection: {
    user: process.env.USER_PG_USER,
    host: process.env.USER_PG_HOST,
    database: process.env.USER_PG_DATABASE,
    password: process.env.USER_PG_PASSWORD,
    port: Number(process.env.USER_PG_PORT),
    ssl: { rejectUnauthorized: false },
  },
});

export default knexInstance;