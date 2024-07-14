/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

dotenv.config();

export default {
  env: {
    SERVER: process.env.SERVER,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
  },
};
